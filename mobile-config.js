App.info({
    id: 'net.easydoneit',
    name: 'ពាក្យកន្លឹះ',
    description: 'An app built by Spartatek',
    author: 'SORN KEA',
    email: 'kea3rd@gmail.com',
    version: '0.0.1',
    website: 'https://keasorn.com/'
  });

  App.icons({
    'iphone': 'resources/icons/edi_apple_icon-60.png',
    'iphone_2x': 'resources/icons/edi_apple_icon-60.png',
    'iphone_3x': 'resources/icons/edi_apple_icon-60.png',
    'ipad': 'resources/icons/edi_apple_icon-60.png',
    'ipad_2x': 'resources/icons/edi_apple_icon-60.png',
    'android': 'resources/icons/edi_apple_icon-60.png',
    'android_ldpi': 'resources/icons/edi_apple_icon-60.png',
    'android_mdpi': 'resources/icons/edi_apple_icon-60.png',
    'android_hdpi': 'resources/icons/edi_apple_icon-60.png',
    'android_xhdpi': 'resources/icons/edi_apple_icon-60.png',
  });

  // android slash are nine-patch black border to stretch
  App.launchScreens({
    'iphone': 'resources/icons/edi_apple_icon-60.png',
    'iphone_2x': 'resources/icons/edi_apple_icon-60.png',
    'iphone5': 'resources/icons/edi_apple_icon-60.png',
    'iphone6': 'resources/icons/edi_apple_icon-60.png',
    'iphone6p_portrait': 'resources/icons/edi_apple_icon-60.png',
    'iphone6p_landscape': 'resources/icons/edi_apple_icon-60.png',
    'ipad_portrait': 'resources/icons/edi_apple_icon-60.png',
    'ipad_portrait_2x': 'resources/icons/edi_apple_icon-60.png',
    'ipad_landscape': 'resources/icons/edi_apple_icon-60.png',
    'ipad_landscape_2x': 'resources/icons/edi_apple_icon-60.png',
    'android_ldpi_portrait': 'resources/icons/edi_apple_icon-60.png',
    'android_ldpi_landscape': 'resources/icons/edi_apple_icon-60.png',
    'android_mdpi_portrait': 'resources/icons/edi_apple_icon-60.png',
    'android_mdpi_landscape': 'resources/icons/edi_apple_icon-60.png',
    'android_hdpi_portrait': 'resources/icons/edi_apple_icon-60.png',
    'android_hdpi_landscape': 'resources/icons/edi_apple_icon-60.png',
    'android_xhdpi_portrait': 'resources/icons/edi_apple_icon-60.png',
    'android_xhdpi_landscape': 'resources/icons/edi_apple_icon-60.png',
  });

  // allow loading external images from markdown
  App.accessRule("*");