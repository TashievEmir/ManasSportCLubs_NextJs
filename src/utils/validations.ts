export const validatePhoneNumber = (value?: string): string | void => {
    if (value && value.length >= 10) {
        const phonePatterns = [
            /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/, // +996 XXX XX XX XX
            /^\+996\s\d{3}\s\d{3}\s\d{3}$/, // +996 XXX XXX XXX
            /^\+996\d{9}$/, // +996XXXXXXXXX
            /^\+996\d{9}$/, // +996XXX XXX XXX
            /^\+996\d{3}\s\d{2}\s\d{2}\s\d{2}$/, // +996XXX XX XX XX
            /^\+996\d{3}\s\d{3}\s\d{3}$/, // +996XXX XXX XXX
            /^0\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/, // 0 XXX XX XX XX
            /^0\d{9}$/, // 0XXXXXXXXX
        ];
        const status = phonePatterns.some((pattern) => pattern.test(value));
        if (!status) {
            return "Туура эмес форматта киргизилди!";
        } else {
            return;
        }
    }
    return "Эң аз 10 символ болушу зарыл!";
};


export const validateEmail = (value?: string): string | void => {
    if (value) {
        const emailPattern = [
            /^[^\s@]+@manas\.edu\.kg$/
        ]
        const status =  emailPattern.some((pattern) => pattern.test(value));
        if(!status){
            return "Туура эмес форматта киргизилди!";
        }else {
            return;
        }
    }
    return "Эң аз 10 символ болушу зарыл!";
};