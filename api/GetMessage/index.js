
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let message;
    try {
        message = await readFileAsync('./GetMessage/content.txt');
    } catch (err) {
        context.log.error('ERROR', err);
        // This rethrown exception will be handled by the Functions Runtime and will only fail the individual invocation
        throw err;
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: message
    };
}
// SIG // Begin signature block
// SIG // MIIr5QYJKoZIhvcNAQcCoIIr1jCCK9ICAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // IdB1XH8g9vw+hveqAU+3TlrKE///co56y4P4xFC59Oeg
// SIG // ghFuMIIIfjCCB2agAwIBAgITNgAAAchkggAwtCOCeAAC
// SIG // AAAByDANBgkqhkiG9w0BAQsFADBBMRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRUw
// SIG // EwYDVQQDEwxBTUUgQ1MgQ0EgMDEwHhcNMjMwMzIwMjAw
// SIG // MDMxWhcNMjQwMzE5MjAwMDMxWjAkMSIwIAYDVQQDExlN
// SIG // aWNyb3NvZnQgQXp1cmUgQ29kZSBTaWduMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKhH7cINkFWa
// SIG // NPbW4CGpQwfhD2vWIwm5iDQIGjc5Siq9Ay9yIB0MPvck
// SIG // Xnp402u+fVvy8Zb+cPXCyiemnyFG7wYwKgPF4+x2awd4
// SIG // beHkFvcWtTV+Yz5oEKVVT0oWR5NfsUHuqEGDlIVFAYB/
// SIG // 7FIlZQWRiC4emeka+jYoFTl50U2mDQ/CvdCquvAd+dBc
// SIG // hoH0BLXWh00rK3NqRoqQj50vTHl+EB5HCer6+uP7iFKi
// SIG // a3vFw1uDonKVKmcz4x8GJo4y5p7plcr4VAB5FdwTpZrz
// SIG // hFObBzJxcxdIT3qMm07RYM6K1EbUn3AKKTEG2O9etQ06
// SIG // oIKCcGHltvj0NZp37NkEJwIDAQABo4IFijCCBYYwKQYJ
// SIG // KwYBBAGCNxUKBBwwGjAMBgorBgEEAYI3WwEBMAoGCCsG
// SIG // AQUFBwMDMD0GCSsGAQQBgjcVBwQwMC4GJisGAQQBgjcV
// SIG // CIaQ4w2E1bR4hPGLPoWb3RbOnRKBYIPdzWaGlIwyAgFk
// SIG // AgEMMIICdgYIKwYBBQUHAQEEggJoMIICZDBiBggrBgEF
// SIG // BQcwAoZWaHR0cDovL2NybC5taWNyb3NvZnQuY29tL3Br
// SIG // aWluZnJhL0NlcnRzL0JZMlBLSUNTQ0EwMS5BTUUuR0JM
// SIG // X0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYIKwYB
// SIG // BQUHMAKGRmh0dHA6Ly9jcmwxLmFtZS5nYmwvYWlhL0JZ
// SIG // MlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIwQ0El
// SIG // MjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6Ly9j
// SIG // cmwyLmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5BTUUu
// SIG // R0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQwUgYI
// SIG // KwYBBQUHMAKGRmh0dHA6Ly9jcmwzLmFtZS5nYmwvYWlh
// SIG // L0JZMlBLSUNTQ0EwMS5BTUUuR0JMX0FNRSUyMENTJTIw
// SIG // Q0ElMjAwMSgyKS5jcnQwUgYIKwYBBQUHMAKGRmh0dHA6
// SIG // Ly9jcmw0LmFtZS5nYmwvYWlhL0JZMlBLSUNTQ0EwMS5B
// SIG // TUUuR0JMX0FNRSUyMENTJTIwQ0ElMjAwMSgyKS5jcnQw
// SIG // ga0GCCsGAQUFBzAChoGgbGRhcDovLy9DTj1BTUUlMjBD
// SIG // UyUyMENBJTIwMDEsQ049QUlBLENOPVB1YmxpYyUyMEtl
// SIG // eSUyMFNlcnZpY2VzLENOPVNlcnZpY2VzLENOPUNvbmZp
// SIG // Z3VyYXRpb24sREM9QU1FLERDPUdCTD9jQUNlcnRpZmlj
// SIG // YXRlP2Jhc2U/b2JqZWN0Q2xhc3M9Y2VydGlmaWNhdGlv
// SIG // bkF1dGhvcml0eTAdBgNVHQ4EFgQUskGhjtP5WCMqHOBI
// SIG // YEqYPR0vFkMwDgYDVR0PAQH/BAQDAgeAMEUGA1UdEQQ+
// SIG // MDykOjA4MR4wHAYDVQQLExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24xFjAUBgNVBAUTDTIzNjE2Nys1MDAzNjAwggHm
// SIG // BgNVHR8EggHdMIIB2TCCAdWgggHRoIIBzYY/aHR0cDov
// SIG // L2NybC5taWNyb3NvZnQuY29tL3BraWluZnJhL0NSTC9B
// SIG // TUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRwOi8v
// SIG // Y3JsMS5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENBJTIw
// SIG // MDEoMikuY3JshjFodHRwOi8vY3JsMi5hbWUuZ2JsL2Ny
// SIG // bC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshjFodHRw
// SIG // Oi8vY3JsMy5hbWUuZ2JsL2NybC9BTUUlMjBDUyUyMENB
// SIG // JTIwMDEoMikuY3JshjFodHRwOi8vY3JsNC5hbWUuZ2Js
// SIG // L2NybC9BTUUlMjBDUyUyMENBJTIwMDEoMikuY3JshoG9
// SIG // bGRhcDovLy9DTj1BTUUlMjBDUyUyMENBJTIwMDEoMiks
// SIG // Q049QlkyUEtJQ1NDQTAxLENOPUNEUCxDTj1QdWJsaWMl
// SIG // MjBLZXklMjBTZXJ2aWNlcyxDTj1TZXJ2aWNlcyxDTj1D
// SIG // b25maWd1cmF0aW9uLERDPUFNRSxEQz1HQkw/Y2VydGlm
// SIG // aWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlP29iamVjdENs
// SIG // YXNzPWNSTERpc3RyaWJ1dGlvblBvaW50MB8GA1UdIwQY
// SIG // MBaAFJZRhOBrb3v+2Aarw/KF5imuavnUMB8GA1UdJQQY
// SIG // MBYGCisGAQQBgjdbAQEGCCsGAQUFBwMDMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQDG1533NPfZ4bL0nuae9PWCGH0ZmNci
// SIG // CejMn71r/igTKxx635KmcI38lYY/vhbu++jhMlN3V3Ke
// SIG // AJEmuUdbTxtaXlhhJwWW/3i4GfQGjFIot6N3F9OuXURf
// SIG // 8jc4LypadrWJV1l1bmZ/G75FiqMoEDF7DYjyYJ9BNUU3
// SIG // alOgYyXygBJJjSfJR/8Vgd8hYCExm9DJgXDlSuKZ7ZeD
// SIG // ailP2EGIO5+m0QGI1tyMKdc/YgPrJUw7NI9wmx8ET/J5
// SIG // fxrrh21fdowYoGCYnphYtGhGBvnqDdaHXbVECC3gzbU+
// SIG // nLfeFF30rr/jHxoXWzKfFcYCj5Xnw52bu5mDZB8jF/dH
// SIG // vhlPMIII6DCCBtCgAwIBAgITHwAAAFHqj/accwyoOwAA
// SIG // AAAAUTANBgkqhkiG9w0BAQsFADA8MRMwEQYKCZImiZPy
// SIG // LGQBGRYDR0JMMRMwEQYKCZImiZPyLGQBGRYDQU1FMRAw
// SIG // DgYDVQQDEwdhbWVyb290MB4XDTIxMDUyMTE4NDQxNFoX
// SIG // DTI2MDUyMTE4NTQxNFowQTETMBEGCgmSJomT8ixkARkW
// SIG // A0dCTDETMBEGCgmSJomT8ixkARkWA0FNRTEVMBMGA1UE
// SIG // AxMMQU1FIENTIENBIDAxMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAyZpSCX0Bno1W1yqXMhT6BUlJ
// SIG // ZWpa4p3xFeiTHO4vm2Q6C/azR5xwxnyYHrkSGDtS2P9X
// SIG // +KDE64V20mmEQkubxnPNeOVnE2RvdPGxgwlq+BhS3ONd
// SIG // VsQPj79q7XgHM9HhzB9+qk0PC9KN1zm9p/seyiRS6JF1
// SIG // dbOqRf1pUl7FAVxmgiCFgV8hHIb/rDPXig7FDi3S0yEx
// SIG // 2CUDVpIq8jEhG8anUFE1WYxM+ni0S5KHwwKPKV4qyGDo
// SIG // DO+9AmDoma3Chyu5WDlW5cdtqXTWsGPE3umtnX6Amlld
// SIG // UFLms4OVR4guKf+n5LIBCC6bTiocfXPomqYjYTKx7AGM
// SIG // faVLaaXmhQIDAQABo4IE3DCCBNgwEgYJKwYBBAGCNxUB
// SIG // BAUCAwIAAjAjBgkrBgEEAYI3FQIEFgQUEmgkQiFHy9Rr
// SIG // vjHPIKTACyN/P0cwHQYDVR0OBBYEFJZRhOBrb3v+2Aar
// SIG // w/KF5imuavnUMIIBBAYDVR0lBIH8MIH5BgcrBgEFAgMF
// SIG // BggrBgEFBQcDAQYIKwYBBQUHAwIGCisGAQQBgjcUAgEG
// SIG // CSsGAQQBgjcVBgYKKwYBBAGCNwoDDAYJKwYBBAGCNxUG
// SIG // BggrBgEFBQcDCQYIKwYBBQUIAgIGCisGAQQBgjdAAQEG
// SIG // CysGAQQBgjcKAwQBBgorBgEEAYI3CgMEBgkrBgEEAYI3
// SIG // FQUGCisGAQQBgjcUAgIGCisGAQQBgjcUAgMGCCsGAQUF
// SIG // BwMDBgorBgEEAYI3WwEBBgorBgEEAYI3WwIBBgorBgEE
// SIG // AYI3WwMBBgorBgEEAYI3WwUBBgorBgEEAYI3WwQBBgor
// SIG // BgEEAYI3WwQCMBkGCSsGAQQBgjcUAgQMHgoAUwB1AGIA
// SIG // QwBBMAsGA1UdDwQEAwIBhjASBgNVHRMBAf8ECDAGAQH/
// SIG // AgEAMB8GA1UdIwQYMBaAFCleUV5krjS566ycDaeMdQHR
// SIG // CQsoMIIBaAYDVR0fBIIBXzCCAVswggFXoIIBU6CCAU+G
// SIG // MWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2lpbmZy
// SIG // YS9jcmwvYW1lcm9vdC5jcmyGI2h0dHA6Ly9jcmwyLmFt
// SIG // ZS5nYmwvY3JsL2FtZXJvb3QuY3JshiNodHRwOi8vY3Js
// SIG // My5hbWUuZ2JsL2NybC9hbWVyb290LmNybIYjaHR0cDov
// SIG // L2NybDEuYW1lLmdibC9jcmwvYW1lcm9vdC5jcmyGgaps
// SIG // ZGFwOi8vL0NOPWFtZXJvb3QsQ049QU1FUm9vdCxDTj1D
// SIG // RFAsQ049UHVibGljJTIwS2V5JTIwU2VydmljZXMsQ049
// SIG // U2VydmljZXMsQ049Q29uZmlndXJhdGlvbixEQz1BTUUs
// SIG // REM9R0JMP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jUkxEaXN0cmlidXRpb25Q
// SIG // b2ludDCCAasGCCsGAQUFBwEBBIIBnTCCAZkwRwYIKwYB
// SIG // BQUHMAKGO2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2lpbmZyYS9jZXJ0cy9BTUVSb290X2FtZXJvb3QuY3J0
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vY3JsMi5hbWUuZ2Js
// SIG // L2FpYS9BTUVSb290X2FtZXJvb3QuY3J0MDcGCCsGAQUF
// SIG // BzAChitodHRwOi8vY3JsMy5hbWUuZ2JsL2FpYS9BTUVS
// SIG // b290X2FtZXJvb3QuY3J0MDcGCCsGAQUFBzAChitodHRw
// SIG // Oi8vY3JsMS5hbWUuZ2JsL2FpYS9BTUVSb290X2FtZXJv
// SIG // b3QuY3J0MIGiBggrBgEFBQcwAoaBlWxkYXA6Ly8vQ049
// SIG // YW1lcm9vdCxDTj1BSUEsQ049UHVibGljJTIwS2V5JTIw
// SIG // U2VydmljZXMsQ049U2VydmljZXMsQ049Q29uZmlndXJh
// SIG // dGlvbixEQz1BTUUsREM9R0JMP2NBQ2VydGlmaWNhdGU/
// SIG // YmFzZT9vYmplY3RDbGFzcz1jZXJ0aWZpY2F0aW9uQXV0
// SIG // aG9yaXR5MA0GCSqGSIb3DQEBCwUAA4ICAQBQECO3Tw/o
// SIG // 317Rrd7yadqcswPx1LvIYymkaTN6KcmuRt6HKa0Xe73U
// SIG // x2/AQ30TfgA9GBJngweRykKBusRzyOU17iIubJvy3gA2
// SIG // 1dwtqtB0DsoEv1U/ptVu2v++doTCJ/i+GbssVXkgaX8H
// SIG // +6EOGEmT4evp4GbwR4HwWlc+Dvf8HH8PdUA2Z04CvcwI
// SIG // fckSipbNm84jxJ8XjmTFTWscldL9edj2NsY6iGnyJFIy
// SIG // ur2PS7VRYyV3p1VAJp91gj1jRQtWEyCB8P5g9nE3z8u0
// SIG // ANaU/hjwEQCrdGyravWgnf2JtG+bT26YAokbc8m+32zU
// SIG // tXRO+NK3tAjhOu2FdsG3qNrF4sc7y37R/C+7Pcb/cFfh
// SIG // ttqsirepZii4xStcjMODYuXzGm3IJs0b0owHG6oKd7ZO
// SIG // GvHpmmh9K8/DLriD/sq8bURD10qi/wuW8zM7IpLg1vcR
// SIG // 9dIK2mc0pj44pc6UX0XbttP/VEJgu3lT2eI9VjWtaKjx
// SIG // 38xE9woSMyekPRtzTwgfuysF9DkJisr+yA4po/FPxpbB
// SIG // w9c/hBf32DH/GFxteS2pmjgKIbMP8sDukmEq3lVvuWNJ
// SIG // sybrZwQvQpvaM49fv+JKpLK5YWYEfwksYRR9wU8Hh/ID
// SIG // 9hRCEkbUoQ2W7mMpsp2Nbp/kcn4ivfolUy3Q9Yf0scsQ
// SIG // 6WTLYpm+AoCUJTGCGc8wghnLAgEBMFgwQTETMBEGCgmS
// SIG // JomT8ixkARkWA0dCTDETMBEGCgmSJomT8ixkARkWA0FN
// SIG // RTEVMBMGA1UEAxMMQU1FIENTIENBIDAxAhM2AAAByGSC
// SIG // ADC0I4J4AAIAAAHIMA0GCWCGSAFlAwQCAQUAoIGuMBkG
// SIG // CSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisGAQQB
// SIG // gjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3DQEJ
// SIG // BDEiBCBE4VTA2U5tf/11vTceKcAX6KZMiIC2+2PtG/IS
// SIG // zRHOwTBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBpAGMA
// SIG // cgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBABIZgR8SIIWg
// SIG // ks9vFBi7G+Fh1en/F49XwXNSGi71ex+VfVWW4j4pIchb
// SIG // h8h/GZ+M1ME1bRICTeTdJLbPo/j7ehOD3xUbyDGURupx
// SIG // qU2s6hpEDD/Ai8srohc9l+NLCL5JggVNoF0YNjvYoE5d
// SIG // bGcvlTB67LkDfhpPgVzbGwpOyWpIY6KEFqpBWwNEKbdp
// SIG // jQXZaGAvB60HLMoE/v7uC9QHXtb5DQKeeIHXBptxxdFH
// SIG // +hMuPtox+UEzl1rtEHdEGQXCzB6Ztm+xGN8cH4DoL23P
// SIG // 39hPAzFogq/DXm4DuJp5Dc2v/CRqBIl6nRgTILGEQDYc
// SIG // s14yux1WX54LKP0TkHixaOuhgheXMIIXkwYKKwYBBAGC
// SIG // NwMDATGCF4Mwghd/BgkqhkiG9w0BBwKgghdwMIIXbAIB
// SIG // AzEPMA0GCWCGSAFlAwQCAQUAMIIBUgYLKoZIhvcNAQkQ
// SIG // AQSgggFBBIIBPTCCATkCAQEGCisGAQQBhFkKAwEwMTAN
// SIG // BglghkgBZQMEAgEFAAQg9Uapj+DIrxKkPoaTLDdtUsdR
// SIG // 3FPO9EkhP09z8gRBxxgCBmW8Et4mDxgTMjAyNDAyMDUx
// SIG // OTUxMzcuMDk0WjAEgAIB9KCB0aSBzjCByzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjElMCMGA1UECxMcTWljcm9zb2Z0IEFt
// SIG // ZXJpY2EgT3BlcmF0aW9uczEnMCUGA1UECxMeblNoaWVs
// SIG // ZCBUU1MgRVNOOkEwMDAtMDVFMC1EOTQ3MSUwIwYDVQQD
// SIG // ExxNaWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNloIIR
// SIG // 7TCCByAwggUIoAMCAQICEzMAAAHr4BhstbbvOO0AAQAA
// SIG // AeswDQYJKoZIhvcNAQELBQAwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTAwHhcNMjMxMjA2MTg0NTM0WhcNMjUw
// SIG // MzA1MTg0NTM0WjCByzELMAkGA1UEBhMCVVMxEzARBgNV
// SIG // BAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQx
// SIG // HjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEl
// SIG // MCMGA1UECxMcTWljcm9zb2Z0IEFtZXJpY2EgT3BlcmF0
// SIG // aW9uczEnMCUGA1UECxMeblNoaWVsZCBUU1MgRVNOOkEw
// SIG // MDAtMDVFMC1EOTQ3MSUwIwYDVQQDExxNaWNyb3NvZnQg
// SIG // VGltZS1TdGFtcCBTZXJ2aWNlMIICIjANBgkqhkiG9w0B
// SIG // AQEFAAOCAg8AMIICCgKCAgEAwRVoIdpW4Fd3iadNaKom
// SIG // hQbmGzXO4UippLbydeTawfwwW6FKMPFjzkz8W5+4HJiD
// SIG // hpsCZHfk8hceyjp868Z6Ad4br7/dX2blLoCLCk5wL4Ng
// SIG // VP53ze2c5/SpNZqbidu0usVAx+KHRYl+dSAnCpehBuHM
// SIG // SoHAwIp4oU/Ma6CVlQEy+6fG2358LHNaYoWZnLyLmBp2
// SIG // 9U2PbZ6XQoVq/RAEbgqN04kRozNi6eKYk9pQ+YZ3d1Wh
// SIG // k3qTasmpKZAhldPnCvFbvx5CGXb8vs+RC96I03RSy+by
// SIG // fSAKIFn91wLt3e0qRWmqHosdHtaueQA/eGcAz/os6i2n
// SIG // bAUd7c46tkX6wjS/k5ov42pUbaPyem4eHz4RxE5wwu/E
// SIG // 9cn11EHRrZif7rSPwDcYux1fIAD84nfU2IzD22KhvMuc
// SIG // c/oCP0hco/mirRx1pisxFz7bV8wHHsSdRB+8G7olZN7B
// SIG // KzyvTC4NV2+oTORyFgNIxAGYShMneYR9lzIm82pG6drN
// SIG // hCUFmrEHOAzGhdRLENQs4ApQ2CGBuq1IbnXyO5PC/Sig
// SIG // hLn0WyuZXUWDQKnXa/8kiX7mb9z0t/r7Q+l+qtR+FDpo
// SIG // wynY6Ft6rOyUTGZh/X5BZDM2+mEs6+nl9S6GJtz6ztSX
// SIG // muN0mM5Qd08/ODr7lUlezXInVbTaomXllqVY32r0fiY/
// SIG // yTkCAwEAAaOCAUkwggFFMB0GA1UdDgQWBBR0ngWs1lXM
// SIG // buKk/TuY09gfqgHq4TAfBgNVHSMEGDAWgBSfpxVdAF5i
// SIG // XYP05dJlpxtTNRnpcjBfBgNVHR8EWDBWMFSgUqBQhk5o
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL2Ny
// SIG // bC9NaWNyb3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIw
// SIG // MjAxMCgxKS5jcmwwbAYIKwYBBQUHAQEEYDBeMFwGCCsG
// SIG // AQUFBzAChlBodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY3Jvc29mdCUyMFRpbWUtU3Rh
// SIG // bXAlMjBQQ0ElMjAyMDEwKDEpLmNydDAMBgNVHRMBAf8E
// SIG // AjAAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMIMA4GA1Ud
// SIG // DwEB/wQEAwIHgDANBgkqhkiG9w0BAQsFAAOCAgEAg3Tf
// SIG // L6D3fAvlVmT9/lvO3P0G3W1itLDrfWeJBDlp4Oypoflg
// SIG // 9i5zyUySiBGsZ4jnLfcDICfMkMsEfFh4Azr28KnarC1G
// SIG // jODa3q7SOhSPa4Y4XmisTTZwWcx2Sw8JZC/bwhA3vUXN
// SIG // HRklXeQYNwlpJ1d7r1WrteBeeREk1iATWkEvQqaNjqc9
// SIG // 3EYAGFX2ixRmwKzXEb0lr0lG3iNiA6kcQuMQW0YjUPta
// SIG // h1wwj59IRrF3y/spw2Z3An7Mza5YGU9uF4Ib082DB3F4
// SIG // qC1WKP9h5MqMOnSO7lCyWysS1/MB4bIsK4lyAwp4y1bB
// SIG // tBOW0fNkIHLHhIcW1NndUVR3ELZFBO1vc8Wamev4z5mq
// SIG // I2YF0Dt9148Th2GFWvwV3CLrvEjMz44wAG7o8E2sKWsy
// SIG // wb/fey0QdGTmzXJCWMkEKRE0n5Td+o1vs+0f5xsiakWd
// SIG // x7WdZV1tX+sxAgHj/vXcup5nAq1XDqm0B1+2a/Fj3IIR
// SIG // yQAA5ZuRMT4ecYtbTUZPouhdmvUqU3kJ2Vz+dMPiaE8S
// SIG // EkKu7wYo9p4rQLEi2lXjKqD4vjV5U1DWdjXbWxa+iIq/
// SIG // WSvbn2s9xcX7w2aN+ubyzqM5kDnv2fqbuL2Ocz5rTYlS
// SIG // HEJxcuyWTomVQyOWyHcEEWotqrhyiepbVHbItx4zZ4nr
// SIG // hO9n0+HlocbZpzeR2AgwggdxMIIFWaADAgECAhMzAAAA
// SIG // FcXna54Cm0mZAAAAAAAVMA0GCSqGSIb3DQEBCwUAMIGI
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQDEylNaWNy
// SIG // b3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkg
// SIG // MjAxMDAeFw0yMTA5MzAxODIyMjVaFw0zMDA5MzAxODMy
// SIG // MjVaMHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNo
// SIG // aW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQK
// SIG // ExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMT
// SIG // HU1pY3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwMIIC
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5OGm
// SIG // TOe0ciELeaLL1yR5vQ7VgtP97pwHB9KpbE51yMo1V/YB
// SIG // f2xK4OK9uT4XYDP/XE/HZveVU3Fa4n5KWv64NmeFRiMM
// SIG // tY0Tz3cywBAY6GB9alKDRLemjkZrBxTzxXb1hlDcwUTI
// SIG // cVxRMTegCjhuje3XD9gmU3w5YQJ6xKr9cmmvHaus9ja+
// SIG // NSZk2pg7uhp7M62AW36MEBydUv626GIl3GoPz130/o5T
// SIG // z9bshVZN7928jaTjkY+yOSxRnOlwaQ3KNi1wjjHINSi9
// SIG // 47SHJMPgyY9+tVSP3PoFVZhtaDuaRr3tpK56KTesy+uD
// SIG // RedGbsoy1cCGMFxPLOJiss254o2I5JasAUq7vnGpF1tn
// SIG // YN74kpEeHT39IM9zfUGaRnXNxF803RKJ1v2lIH1+/Nme
// SIG // Rd+2ci/bfV+AutuqfjbsNkz2K26oElHovwUDo9Fzpk03
// SIG // dJQcNIIP8BDyt0cY7afomXw/TNuvXsLz1dhzPUNOwTM5
// SIG // TI4CvEJoLhDqhFFG4tG9ahhaYQFzymeiXtcodgLiMxhy
// SIG // 16cg8ML6EgrXY28MyTZki1ugpoMhXV8wdJGUlNi5UPkL
// SIG // iWHzNgY1GIRH29wb0f2y1BzFa/ZcUlFdEtsluq9QBXps
// SIG // xREdcu+N+VLEhReTwDwV2xo3xwgVGD94q0W29R6HXtqP
// SIG // nhZyacaue7e3PmriLq0CAwEAAaOCAd0wggHZMBIGCSsG
// SIG // AQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYEFCqn
// SIG // Uv5kxJq+gpE8RjUpzxD/LwTuMB0GA1UdDgQWBBSfpxVd
// SIG // AF5iXYP05dJlpxtTNRnpcjBcBgNVHSAEVTBTMFEGDCsG
// SIG // AQQBgjdMg30BATBBMD8GCCsGAQUFBwIBFjNodHRwOi8v
// SIG // d3d3Lm1pY3Jvc29mdC5jb20vcGtpb3BzL0RvY3MvUmVw
// SIG // b3NpdG9yeS5odG0wEwYDVR0lBAwwCgYIKwYBBQUHAwgw
// SIG // GQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYDVR0P
// SIG // BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0jBBgw
// SIG // FoAU1fZWy4/oolxiaNE9lJBb186aGMQwVgYDVR0fBE8w
// SIG // TTBLoEmgR4ZFaHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0XzIw
// SIG // MTAtMDYtMjMuY3JsMFoGCCsGAQUFBwEBBE4wTDBKBggr
// SIG // BgEFBQcwAoY+aHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraS9jZXJ0cy9NaWNSb29DZXJBdXRfMjAxMC0wNi0y
// SIG // My5jcnQwDQYJKoZIhvcNAQELBQADggIBAJ1VffwqreEs
// SIG // H2cBMSRb4Z5yS/ypb+pcFLY+TkdkeLEGk5c9MTO1OdfC
// SIG // cTY/2mRsfNB1OW27DzHkwo/7bNGhlBgi7ulmZzpTTd2Y
// SIG // urYeeNg2LpypglYAA7AFvonoaeC6Ce5732pvvinLbtg/
// SIG // SHUB2RjebYIM9W0jVOR4U3UkV7ndn/OOPcbzaN9l9qRW
// SIG // qveVtihVJ9AkvUCgvxm2EhIRXT0n4ECWOKz3+SmJw7wX
// SIG // sFSFQrP8DJ6LGYnn8AtqgcKBGUIZUnWKNsIdw2FzLixr
// SIG // e24/LAl4FOmRsqlb30mjdAy87JGA0j3mSj5mO0+7hvoy
// SIG // GtmW9I/2kQH2zsZ0/fZMcm8Qq3UwxTSwethQ/gpY3UA8
// SIG // x1RtnWN0SCyxTkctwRQEcb9k+SS+c23Kjgm9swFXSVRk
// SIG // 2XPXfx5bRAGOWhmRaw2fpCjcZxkoJLo4S5pu+yFUa2pF
// SIG // EUep8beuyOiJXk+d0tBMdrVXVAmxaQFEfnyhYWxz/gq7
// SIG // 7EFmPWn9y8FBSX5+k77L+DvktxW/tM4+pTFRhLy/AsGC
// SIG // onsXHRWJjXD+57XQKBqJC4822rpM+Zv/Cuk0+CQ1Zyvg
// SIG // DbjmjJnW4SLq8CdCPSWU5nR0W2rRnj7tfqAxM328y+l7
// SIG // vzhwRNGQ8cirOoo6CGJ/2XBjU02N7oJtpQUQwXEGahC0
// SIG // HVUzWLOhcGbyoYIDUDCCAjgCAQEwgfmhgdGkgc4wgcsx
// SIG // CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9u
// SIG // MRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jv
// SIG // c29mdCBBbWVyaWNhIE9wZXJhdGlvbnMxJzAlBgNVBAsT
// SIG // Hm5TaGllbGQgVFNTIEVTTjpBMDAwLTA1RTAtRDk0NzEl
// SIG // MCMGA1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vy
// SIG // dmljZaIjCgEBMAcGBSsOAwIaAxUAgAaJdbtcMMGIFLVK
// SIG // MDJ6mL27pd6ggYMwgYCkfjB8MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EgMjAxMDANBgkqhkiG9w0BAQsFAAIFAOlrLhgw
// SIG // IhgPMjAyNDAyMDUwOTUxMjBaGA8yMDI0MDIwNjA5NTEy
// SIG // MFowdzA9BgorBgEEAYRZCgQBMS8wLTAKAgUA6WsuGAIB
// SIG // ADAKAgEAAgIA5QIB/zAHAgEAAgIS/TAKAgUA6Wx/mAIB
// SIG // ADA2BgorBgEEAYRZCgQCMSgwJjAMBgorBgEEAYRZCgMC
// SIG // oAowCAIBAAIDB6EgoQowCAIBAAIDAYagMA0GCSqGSIb3
// SIG // DQEBCwUAA4IBAQBeEfZ1341Ho2u5rCXsieHM8+EcvSP2
// SIG // Dmk3vQRoWmyzFBoVAj7LlJ1QCL7RVHKNmOu9N84gqA01
// SIG // C6u8jir5HBQaumyyQ/M4R2flVaI+lR1GsUcZoOh+SKSl
// SIG // 0jwNiIh2rD2uCrRMwPPDgYQkBdPmhXihY1WMdGEVV5/i
// SIG // tAEBW75MtlN53b0isDseGLknmvpzM6KsEiOKubjpOjzg
// SIG // Z6x/jRUbc8HmTBe2J/ScjtkWbY509CpjpCWFpiQzVzTN
// SIG // 995UoVuT/pVdJLtcORZ6zWdlejPOCQnvuaNjZR8FHkBo
// SIG // 7Wq0tIGD03CvlxBTQwFj6t91va2LOHcw1ZHXfUciecxz
// SIG // d8XJMYIEDTCCBAkCAQEwgZMwfDELMAkGA1UEBhMCVVMx
// SIG // EzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1Jl
// SIG // ZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3Jh
// SIG // dGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0IFRpbWUtU3Rh
// SIG // bXAgUENBIDIwMTACEzMAAAHr4BhstbbvOO0AAQAAAesw
// SIG // DQYJYIZIAWUDBAIBBQCgggFKMBoGCSqGSIb3DQEJAzEN
// SIG // BgsqhkiG9w0BCRABBDAvBgkqhkiG9w0BCQQxIgQgOisP
// SIG // SfdCnqm9zWg17AksknkTCq5fi0ZqLOi+bh8x7tUwgfoG
// SIG // CyqGSIb3DQEJEAIvMYHqMIHnMIHkMIG9BCDOt2u+X2kD
// SIG // 4X/EgQ07ZNg0lICG3Ys17M++odSXYSws+DCBmDCBgKR+
// SIG // MHwxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xJjAkBgNVBAMTHU1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB
// SIG // 6+AYbLW27zjtAAEAAAHrMCIEIHdahPWKY1EsNXgbBLiw
// SIG // 0+NLdInnlyYesxojEkIVRLngMA0GCSqGSIb3DQEBCwUA
// SIG // BIICAH8HfbVqhttBBGI0WaWskv63R+RegU+2Y8cUl6M0
// SIG // rSb+ocMbv2DyGC2r9495vb0EHUbYZmMX2QgTMm/qhHji
// SIG // tr63frDdLeMwKYNcyWuo/3k7BlX+zWD7ZjODm3M0xpP3
// SIG // 41+yAfUXgz/1zmDtGw1JpcoDXayePFMg6dOgc1UF/gej
// SIG // 4YOKtVCmX1UupZT2VKTY8YaZChlIBL+zMfKp3YMTWhgV
// SIG // q4Of9fbUgdCj6r0XpGvbd8hFp2vsE4yZfdwTPLsvlLP+
// SIG // s0wSbu9Q5eVqPJYGdY2EgvnMsY8S505D+/yAwpqv5fZ+
// SIG // fEzxbglL1je8LNkEsc2PXukM7hITBkyVsX1zWNvW48s/
// SIG // /SOWqO/IyK7Cw8vxoGhAI24tHl0fGfXDW6WqGt+5darj
// SIG // sJLQ1eZgLDBhvmomY1B3TDi04EhRGz5nbgP4ooGZoBUo
// SIG // tMcgnpfYFnSuEKOSGz17gIutE1YwjpyqBilD/qcDG6rv
// SIG // ObMtEISl/eWrovibhAf3eF5uGLWucph8b38HBqoC4JfL
// SIG // g5K8SiwAM6KQz1IkItUf57yxYiOIPVqZmyo2NHqnMaJ5
// SIG // eXEFF0Sm5VUban3dbuELJVUnaKdZXOwcdP42F8kcyIys
// SIG // bBhm5BjyEhYbfoXKua3quDWLv4uZL+tyKrNv616w99dr
// SIG // XDa0DTtl0emaoRwYj+zUx/jVilrw
// SIG // End signature block
