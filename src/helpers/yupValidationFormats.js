const postalCodeFormat = new RegExp(/^\d{5}([-]?\d{4})?$/);
const cityFormat = new RegExp(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/);
const phoneNumberFormat = new RegExp(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/);
const websiteFormat = new RegExp(/(https?:\/\/)?(www\.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)|(https?:\/\/)?(www\.)?(?!ww)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/); 
const emailFormat = new RegExp(/[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/); 
const stringFormat = new RegExp(/^[a-zA-Z0-9_]*$/); 

export {
  cityFormat,
  stringFormat,
  emailFormat,
  phoneNumberFormat,
  postalCodeFormat,
  websiteFormat,
}
