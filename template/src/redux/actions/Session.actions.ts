
export function RESET_ALL_REDUCERS() {
  return { type: 'USER_LOGOUT', payload: '' }
}

export function set_session(session: any) {
  /* CHIAMATA AJAX QUI */
  return { type: "SET_SESSION", payload: session };
}

export function Set_user(userProperties: any) {
  /* CHIAMATA AJAX QUI */
  return { type: "SET_USER", payload: userProperties };
}

export function PathChanged(newPath: any) {
  return { type: "page-changed", payload: newPath };
}