import { boot } from 'quasar/wrappers';
import { useAmap } from '@dabu/vue3-amap'
import '@dabu/vue3-amap/dist/style.css'

const { initAMapApiLoader } = useAmap()
export default boot(async ({ app, router, store }) => {
  // something to do
  await initAMapApiLoader({
    key: '309af3d4e9776c160ac742e5965bdb50',
    version: '2.0'
  })
})
