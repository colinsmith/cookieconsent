"use strict"

const CookieConsent = require( "./models/CookieConsent" ).default
const { CookieConsent: CC } = require( "./" )

describe( "Plugin", () => {
  test( "instantiates without errors", () => {
    expect( new CC() ).toBeInstanceOf( CookieConsent )
  })
})

