"use strict"

import "./styles/main.scss"

import CookieConsent from "./models/CookieConsent"

if (typeof exports !== 'undefined') {
  exports.CookieConsent = CookieConsent
} else {
  window.CookieConsent = CookieConsent
}
