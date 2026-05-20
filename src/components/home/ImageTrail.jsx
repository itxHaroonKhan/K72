import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ImageTrail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0, clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return { x: clientX - rect.left, y: clientY - rect.top };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

class ImageItem {
  constructor(el) {
    this.DOM = { el, inner: el.querySelector('.content__img-inner') };
    this.rect = el.getBoundingClientRect();
  }
}

// ── Variant 1: Speed-mapped scale, blur, brightness, grayscale ──────────────
class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 60;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  mapRange(value, min, max) {
    const maxSpeed = 100;
    return min + (max - min) * Math.min(value / maxSpeed, 1);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    const scale = this.mapRange(speed, 0.6, 1.4);
    const brightness = this.mapRange(speed, 0.5, 1.3);
    const blur = this.mapRange(speed, 0, 8);
    const grayscale = this.mapRange(speed, 1, 0);

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1,
        scale,
        filter: `brightness(${brightness * 100}%) blur(${blur}px) grayscale(${(1 - grayscale) * 100}%)`,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.8,
        ease: 'power3',
        scale: 1,
        filter: 'brightness(100%) blur(0px) grayscale(0%)',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power3.in', opacity: 0, scale: 0.8 }, 0.5);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

// ── Variant 2: Smooth follow with rotation ───────────────────────────────────
class ImageTrailVariant2 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 70;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 0, scale: 0.5, rotation: angle - 20,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.6, ease: 'power2.out',
        opacity: 1, scale: 1, rotation: angle,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, { duration: 0.6, ease: 'power3.in', opacity: 0, scale: 0.6, rotation: angle + 20 }, 0.5);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

// ── Variant 3: Stack + stagger fade ─────────────────────────────────────────
class ImageTrailVariant3 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 50;
    this.visibleImagesTotal = 4;
    this.visibleImagesCount = 0;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];
    const scaleValue = gsap.utils.random(0.8, 1.2);

    if (this.visibleImagesCount >= this.visibleImagesTotal) {
      const oldIndex = (this.imgPosition - this.visibleImagesTotal + this.imagesTotal) % this.imagesTotal;
      const oldImg = this.images[oldIndex];
      gsap.to(oldImg.DOM.el, {
        duration: 0.4, ease: 'power4', opacity: 0, scale: 1.3,
        onComplete: () => { if (this.activeImagesCount > 0) this.onImageDeactivated(); this.visibleImagesCount = Math.max(0, this.visibleImagesCount - 1); }
      });
    }

    this.visibleImagesCount++;
    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({ onStart: () => this.onImageActivated() })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: scaleValue - 0.3, rotationZ: 0,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power3',
        scale: scaleValue, rotationZ: gsap.utils.random(-4, 4),
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

// ── Variant 4: Momentum / throw ───────────────────────────────────────────────
class ImageTrailVariant4 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 1,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.4, ease: 'power2',
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .to(img.DOM.el, { duration: 0.3, ease: 'power2.in', opacity: 0 }, 0.3)
      .to(img.DOM.el, { duration: 1.5, ease: 'power4', x: `+=${dx * 110}`, y: `+=${dy * 110}` }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

// ── Variant 5: Clockwise angle rotation ──────────────────────────────────────
class ImageTrailVariant5 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };
    this.lastAngle = 0;

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    const startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    dx = (dx / dist) * (dist / 150);
    dy = (dy / dist) * (dist / 150);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, filter: 'brightness(80%)', scale: 0.1,
        zIndex: this.zIndexVal, rotation: startAngle,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 1, ease: 'power2',
        scale: 1, filter: 'brightness(100%)', rotation: this.lastAngle,
        x: this.mousePos.x - img.rect.width / 2 + dx * 70,
        y: this.mousePos.y - img.rect.height / 2 + dy * 70
      }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'expo', opacity: 0 }, 0.5)
      .to(img.DOM.el, { duration: 1.5, ease: 'power4', x: `+=${dx * 120}`, y: `+=${dy * 120}` }, 0.05);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

// ── Variant 6: Speed-mapped scale + inner zoom + opacity fade ─────────────────
class ImageTrailVariant6 {
  constructor(container) {
    this.container = container;
    this.images = [...container.querySelectorAll('.content__img')].map(el => new ImageItem(el));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    const handlePointerMove = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('touchmove', handlePointerMove);

    const initRender = ev => {
      const rect = container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
      this.cacheMousePos = { ...this.mousePos };
      requestAnimationFrame(() => this.render());
      container.removeEventListener('mousemove', initRender);
      container.removeEventListener('touchmove', initRender);
    };
    container.addEventListener('mousemove', initRender);
    container.addEventListener('touchmove', initRender);
  }

  render() {
    const distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.3);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.3);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    requestAnimationFrame(() => this.render());
  }

  mapRange(speed, min, max, maxSpeed = 200) {
    return min + (max - min) * Math.min(speed / maxSpeed, 1);
  }

  showNextImage() {
    const dx = this.mousePos.x - this.cacheMousePos.x;
    const dy = this.mousePos.y - this.cacheMousePos.y;
    const speed = Math.sqrt(dx * dx + dy * dy);
    const scale = this.mapRange(speed, 0.3, 2);
    const brightness = this.mapRange(speed, 0, 1.3, 70);
    const blur = this.mapRange(speed, 20, 0, 90);
    const grayscale = this.mapRange(speed, 600, 0, 90);

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    gsap.killTweensOf(img.DOM.el);
    gsap.timeline({
      onStart: () => this.onImageActivated(),
      onComplete: () => this.onImageDeactivated()
    })
      .fromTo(img.DOM.el, {
        opacity: 1, scale: 0,
        filter: `grayscale(${grayscale}%) brightness(${brightness * 100}%) blur(${blur}px)`,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2
      }, {
        duration: 0.8, ease: 'power3',
        scale,
        filter: `grayscale(0%) brightness(100%) blur(0px)`,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2
      }, 0)
      .fromTo(img.DOM.inner, { scale: 2 }, { duration: 0.8, ease: 'power3', scale: 1 }, 0)
      .to(img.DOM.el, { duration: 0.4, ease: 'power3.in', opacity: 0, scale: 0.2 }, 0.45);
  }

  onImageActivated() { this.activeImagesCount++; this.isIdle = false; }
  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  }
}

const variantMap = {
  '1': ImageTrailVariant1,
  '2': ImageTrailVariant2,
  '3': ImageTrailVariant3,
  '4': ImageTrailVariant4,
  '5': ImageTrailVariant5,
  '6': ImageTrailVariant6
};

export default function ImageTrail({ items = [], variant = '1' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const Variant = variantMap[variant] || ImageTrailVariant1;
    new Variant(container);
  }, [variant]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((src, i) => (
        <div key={i} className="content__img">
          <div
            className="content__img-inner"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}
    </div>
  );
}
