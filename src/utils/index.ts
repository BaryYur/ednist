import { LIST_FADE_ANIMATION_DURATION } from 'constant-variables'

export const calcItemAnimationDuration = (index) => {
  return LIST_FADE_ANIMATION_DURATION + (index / 3)
}