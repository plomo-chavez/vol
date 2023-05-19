<template>
<div>
    <CameraCodeScanner @scan="onScan" @load="onLoad"></CameraCodeScanner>
</div>
</template>

<script>
import { CameraCodeScanner } from "vue-barcode-qrcode-scanner";
import { BButton } from 'bootstrap-vue'
import Scann from '@currentComponents/ScannerCode.vue'
import ModalValidSession from '@currentComponents/ModalValidSession.vue'
import customHelpers  from '@helpers/customHelpers'

import apis from '@/apis/useApis'

export default {
  components: {
    BButton,
    ModalValidSession,
    Scann,
  },
  data() {
    return {
      data: {},
      openModal:false,
    }
  },
  mixins : [customHelpers],
  created() {
    setTimeout(() => {
      this.openModal = true;
    }, 1000);
  },
  methods: {
  onLoad({
    controls,
    scannerElement,
    browserMultiFormatReader
  }) {
    console.log(controls)
    // ---- BrowserMultiFormatReader Controls API ----
    // {
    //   stop: f() // Stops the video stream (Basically turns off the camera)
    // }

    console.log(scannerElement)
    // ---- The ref to the video native element that streams the video-camera output ----
    // <video data-v-73df36b4="" poster="data:image/gif,AAAA" autoplay="true" muted="true" // playsinline="true"></video>

    console.log(browserMultiFormatReader)
    // ---- A reference to the BrowserMultiFormatReader object. ----
    // hints: Map(0)
    // options: {
    //  delayBetweenScanAttempts: 500
    //  delayBetweenScanSuccess: 500
    //  tryPlayVideoTimeout: 5000
    // }
    // reader: MultiFormatReader

    // Please refer to the [ZXing (Zebra crossing) browser documentation](https://github.com/zxing-js/browser)

  },
  onScan({ result, raw }) {
    console.log(result)
    // ---- Scan result ----
    // "http://en.m.wikipedia.org"

    console.log(raw)
    // ---- Raw BrowserMultiFormatReader.decodeFromVideoDevice result ----
    // format: 11
    // numBits: 272
    // rawBytes: Uint8Array(34) [65, 150, 135, 71, 71, 3, 162, 242, 246, 86, 226, 230, 210, 231, 118, 150, 182, 151, 6, 86, 70, 150, 18, 230, 247, 38, 112, 236, 17, 236, 17, 236, 17, 236, buffer: ArrayBuffer(34), byteLength: 34, byteOffset: 0, length: 34, Symbol(Symbol.toStringTag): 'Uint8Array']
    // resultMetadata: Map(2) {2 => Array(1), 3 => 'Q'}
    // resultPoints: (4) [FinderPattern, FinderPattern, FinderPattern, AlignmentPattern]
    // text: "http://en.m.wikipedia.org"
    // timestamp: 1654535879486
  }
}
}
</script>
