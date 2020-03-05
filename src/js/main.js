import AbstractApplication from 'views/AbstractApplication'
import GUILayer from './layers/GUILayer'
import GlobeLayer from './layers/GlobeLayer'
import MapLayer from './layers/MapLayer'
class Main extends AbstractApplication {
  constructor () {
    super()

    // set clear color to transparent
    this.renderer.setClearColor(0xffffff, 0)

    // define scenes
    this.mapLayer = new MapLayer(this, true)
    this.mapLayer.setup()
    this.globeLayer = new GlobeLayer(this)
    this.globeLayer.setup()
    this.GUILayer = new GUILayer(this)
    this.GUILayer.setup()
    // this.boxExampleLayer = new BoxExampleLayer(this)
    // this.boxExampleLayer.setup()

    // add scenes
    this.addLayer(this.globeLayer)
    this.addLayer(this.GUILayer)
    this.addLayer(this.mapLayer)
    // start animation renderer
    this.animate()
  }
}
export default Main
