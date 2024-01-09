function emitEvent(name: string) {
  const event = new Event(name);
  window.dispatchEvent(event);
}

export { emitEvent };
