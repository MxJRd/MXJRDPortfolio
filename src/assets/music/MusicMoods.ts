import Cordova from './CordovaDraft3.mp3'
import Waves from './Song2Draft1.mp3'
import Underdog from './Song1Revised1.mp3'
import Tendencies from './Tendencies(2).mp3'
import ThousandthCut from './Major9sMakeMeMoistNEUTRON.mp3'

export interface TrackInfoType {
  artist: string
  title: string
  track: HTMLAudioElement['src']
}

interface MusicMoodsType {
  [mood: string]: Array<TrackInfoType>
}

const CordovaTrackInfo: TrackInfoType = {
  artist: 'Hsurely',
  title: 'Cordova',
  track: Cordova
}
const WavesTrackInfo: TrackInfoType = {
  artist: 'Hsurely',
  title: 'Waves',
  track: Waves
}
const UnderdogTrackInfo: TrackInfoType = {
  artist: 'Hsurely',
  title: 'Underdog',
  track: Underdog
}

const TendenciesTrackInfo: TrackInfoType = {
  artist: 'All Signs Point To',
  title: 'Tendencies',
  track: Tendencies
}

const ThousandthCutTrackInfo: TrackInfoType = {
  artist: 'All Signs Point To',
  title: 'Thousandth Cut',
  track: ThousandthCut
}

const MusicMoods: MusicMoodsType = {
  yazzy: [CordovaTrackInfo, UnderdogTrackInfo, WavesTrackInfo],
  mathy: [TendenciesTrackInfo, ThousandthCutTrackInfo]
}

export default MusicMoods