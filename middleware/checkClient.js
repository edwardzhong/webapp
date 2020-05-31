import { isJDApp, isMiniProgram } from '../utils/client'

export default function({ route, redirect }) {
  if (route.path.includes('download_app') || route.path.includes('offline')) {
    return
  }

  if (!(isJDApp() || isMiniProgram())) {
    return redirect('/download_app/' + location.search)
  }
}
