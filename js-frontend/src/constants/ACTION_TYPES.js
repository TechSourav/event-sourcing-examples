import { TODO_DEFINE, defineActionType } from '../utils/defineActionTypes'

export default defineActionType({
  /*
   * View model
   */
  AUTH: {
    CONFIGURE_START: TODO_DEFINE,
    CONFIGURE_COMPLETE: TODO_DEFINE,
    CONFIGURE_ERROR: TODO_DEFINE,
    AUTHENTICATE_START: TODO_DEFINE,
    AUTHENTICATE_COMPLETE: TODO_DEFINE,
    AUTHENTICATE_ERROR: TODO_DEFINE,
    SIGN_IN_START: TODO_DEFINE,
    SIGN_IN_COMPLETE: TODO_DEFINE,
    SIGN_IN_ERROR: TODO_DEFINE,
    SIGN_IN_FORM_UPDATE: TODO_DEFINE,
    SIGN_UP_START: TODO_DEFINE,
    SIGN_UP_COMPLETE: TODO_DEFINE,
    SIGN_UP_ERROR: TODO_DEFINE,
    SIGN_UP_FORM_UPDATE: TODO_DEFINE,
    SIGN_OUT_START: TODO_DEFINE,
    SIGN_OUT_COMPLETE: TODO_DEFINE
  },

  ENTITIES: {
    REQUESTED: TODO_DEFINE,
    RECEIVED: TODO_DEFINE,
    RECEIVED_LIST: TODO_DEFINE
  },

  ACCOUNTS: {
    LIST_START: TODO_DEFINE,
    LIST_COMPLETE: TODO_DEFINE,
    LIST_ERROR: TODO_DEFINE,
    LIST_REF_START: TODO_DEFINE,
    LIST_REF_COMPLETE: TODO_DEFINE,
    LIST_REF_ERROR: TODO_DEFINE,
    CREATE_START: TODO_DEFINE,
    CREATE_COMPLETE: TODO_DEFINE,
    CREATE_ERROR: TODO_DEFINE,
    CREATE_FORM_UPDATE: TODO_DEFINE,
    EDIT_START: TODO_DEFINE,
    EDIT_COMPLETE: TODO_DEFINE,
    EDIT_ERROR: TODO_DEFINE,
    EDIT_FORM_UPDATE: TODO_DEFINE,
    CREATE_REF_START: TODO_DEFINE,
    CREATE_REF_COMPLETE: TODO_DEFINE,
    CREATE_REF_ERROR: TODO_DEFINE,
    CREATE_REF_FORM_UPDATE: TODO_DEFINE,
    CREATE_REF_OWNER_LOOKUP_START: TODO_DEFINE,
    CREATE_REF_OWNER_LOOKUP_COMPLETE: TODO_DEFINE,
    CREATE_REF_ACCOUNT_LOOKUP_START: TODO_DEFINE,
    CREATE_REF_ACCOUNT_LOOKUP_COMPLETE: TODO_DEFINE
  },

  ACCOUNT: {
    SINGLE_START: TODO_DEFINE,
    SINGLE_COMPLETE: TODO_DEFINE,
    SINGLE_ERROR: TODO_DEFINE,
    DELETE_START: TODO_DEFINE,
    DELETE_COMPLETE: TODO_DEFINE,
    DELETE_ERROR: TODO_DEFINE
  },
  
  TRANSFERS: {
    MAKE_START: TODO_DEFINE,
    MAKE_COMPLETE: TODO_DEFINE,
    MAKE_ERROR: TODO_DEFINE,
    MAKE_FORM_UPDATE: TODO_DEFINE,
    LIST_START: TODO_DEFINE,
    LIST_COMPLETE: TODO_DEFINE,
    LIST_ERROR: TODO_DEFINE
  },

  ERROR: {
    START:TODO_DEFINE,
    STOP:TODO_DEFINE
  }

})
