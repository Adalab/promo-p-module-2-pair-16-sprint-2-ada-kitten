function filterKitten(ev) {
    const descrSearchText = kittenDataList
    .filter((description)=>description.desc.toLowerCase === input_search_desc.value )
    listElement.innerHTML =   descrSearchText
    


    //Modifica el código:
    //Haz un filter sobre el listado de gatitos
    //Vuelve a pintar el listado de gatitos filtrados en el HTML.
  }