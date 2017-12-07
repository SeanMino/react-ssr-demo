'use strict';

export function scrollTop(top = 0, scrollWrapper) {
  scrollWrapper && (scrollWrapper.scrollTop = top);
}