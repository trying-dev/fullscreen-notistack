import { FullScreen, useFullScreenHandle } from "react-full-screen"
import { SnackbarProvider, enqueueSnackbar } from "notistack"
import type { VariantType } from "notistack"

import "./App.css"

export const App = () => {
  const handle = useFullScreenHandle()
  const { active, enter, exit } = handle

  const enterFullScreen = () => {
    enter()
  }

  const exitFullscreen = () => {
    exit()
  }

  const executeVariant = (variant: VariantType) => {
    enqueueSnackbar(variant, { variant })
  }

  return (
    <SnackbarProvider
      preventDuplicate
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
    >
      <FullScreen className="App" handle={handle}>
        <div className="Notifications">
          <h2>Notifications</h2>
          <ul>
            <li>
              <button onClick={() => executeVariant("default")}>default</button>
            </li>
            <li>
              <button onClick={() => executeVariant("success")}>Success</button>
            </li>
            <li>
              <button onClick={() => executeVariant("error")}>Error</button>
            </li>
            <li>
              <button onClick={() => executeVariant("warning")}>Warning</button>
            </li>
            <li>
              <button onClick={() => executeVariant("info")}>Info</button>
            </li>
          </ul>
        </div>

        <div className="FullScreenControls">
          <h2>Fullscreen</h2>
          {active ? (
            <button onClick={exitFullscreen}>return</button>
          ) : (
            <button onClick={enterFullScreen}>open full screen</button>
          )}
        </div>
      </FullScreen>
    </SnackbarProvider>
  )
}
