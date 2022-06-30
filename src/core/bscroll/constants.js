import { ua, isIOS } from '@/core/bscroll/env'
import { getIOSVersion } from '@/core/bscroll/util'

function getUseTransition() {
  let useTransition = true
  if (isIOS) {
    const version = getIOSVersion(ua)
    if (!version) return useTransition

    if (version.major >= 13 && version.minor >= 3) {
      useTransition = false
    }
  }
  return useTransition
}

// fix the scrolling problem in iOS13.4 webview
export const USE_TRANSITION = getUseTransition()
