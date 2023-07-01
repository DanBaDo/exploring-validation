// DNI permitiendo el uso opcional de espacio, guiones y puntos
const regexDNI = /^[x-z]?[- ]?[0-9]{2}.?(?:[0-9]{3}.?){2}[- ]?[a-hj-np-tv-z]$/i
// DNI sin separadores
const regexDNIsimplificado = /^[x-z]?[0-9]{8}[a-hj-np-tv-z]$/i
