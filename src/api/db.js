let productList = [
  {
    id: 1,
    name: 'Gafas de sol',
    marca: 'Julbo',
    modelo: 'reactiv',
    img: 'https://www.tradeinn.com/f/13798/137985176/julbo-gafas-de-sol-fotocromaticas-ultimate.webp',
    url: 'https://www.tradeinn.com/trekkinn/es/julbo-gafas-de-sol-fotocromaticas-ultimate/137985176/p?utm_source=google_products&utm_medium=merchant&id_producte=12602927&country=es&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0cslBapN4aevSLHYinGRhnEBqbkHC7nYq0zVxUNBKQiMzjympFTBavF4aAsEXEALw_wcB&gclsrc=aw.ds',
    category: 'Gafas de sol',
    precio: '140.5€'
  },
  {
    id: 2,
    name: 'Guantes',
    marca: 'Siroko',
    modelo: 'Nuremberg',
    img: 'https://cdn.siroko.com/products/63048edb6ec44/1200x/crop_center.webp?v=1711622607&_gl=1*11c4lxe*_up*MQ..&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0cskh4PuxZjkmd7RmAvIzLFCW9gjdWJaqeb7XBwVqtC-GasfZcS2bXxcaArwhEALw_wcB',
    url: 'https://www.siroko.com/es/p/guantes-ciclismo-nuremberg-negro?country=ES&language=es&variant=c286483f-3d41-4a11-aff1-9dc8e72f29da&cur=EUR&img=feed_floating_image&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0cskh4PuxZjkmd7RmAvIzLFCW9gjdWJaqeb7XBwVqtC-GasfZcS2bXxcaArwhEALw_wcB',
    category: 'Ropa y complementos',
    precio: '38.95€'
  },
  {
    id: 3,
    name: 'Bicicleta',
    marca: 'Giant',
    modelo: 'Content R3',
    img: 'https://www.tradeinn.com/f/14105/141054938/giant-bicicleta-de-carretera-contend-ar-3-sora-2022.webp',
    url: 'https://www.tradeinn.com/bikeinn/es/giant-bicicleta-de-carretera-contend-ar-3-sora-2022/141054938/p?utm_source=google_products&utm_medium=merchant&id_producte=143925785&country=es&gad_source=1&gclid=Cj0KCQjw4Oe4BhCcARIsADQ0csmaNuDLzOCwefYVXz7b8wdOxKXaptK9OBKJW_DvrRW1yCoVQZcgZM4aAnZfEALw_wcB&gclsrc=aw.ds',
    category: 'Equipamiento',
    precio: '999.99€'
  },
  {
    id: 4,
    name: 'Bastones',
    marca: 'Ternua',
    modelo: 'Gorbe',
    img: 'https://www.tradeinn.com/f/14127/141278452/ternua-bastones-gorbe.webp',
    url: 'https://www.tradeinn.com/trekkinn/es/ternua-bastones-gorbe/141278452/p?utm_source=google_products&utm_medium=merchant&id_producte=144795754&country=es&gad_source=1&gclid=CjwKCAjwg-24BhB_EiwA1ZOx8nUUWtgeW3F2bWubwp-UcDNHL39Gl-nzxRa1kSyusaa1dMuTU-U7gBoCZ-MQAvD_BwE&gclsrc=aw.ds',
    category: 'Ropa y complementos',
    precio: '35.99€'
  },
  {
    id: 5,
    name: 'Bastones',
    marca: 'Ferrino',
    modelo: 'Spantik',
    img: 'https://dawfo2ydqeykk.cloudfront.net/catalog/product/cache/a0878e296847b1aa8832f2fdabad9b1b/f/e/ferrino_spantik_1.jpg',
    url: 'https://www.oliunid.es/ferrino-spantik-par-de-bastones-para-trekking.html?gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2rBSuHRMlkaF47cMWt1uwjfHw4v3XLbPZQ3Rg07ls9YcT8vfspF9MYaAjK8EALw_wcB#92=15',
    category: 'Ropa y complementos',
    precio: '55.90€'
  },
  {
    id: 6,
    name: 'Gafas de sol',
    marca: 'Siroko',
    modelo: 'Lanzarote X1',
    img: 'https://cdn.siroko.com/s/files/1/1220/6874/products/lanzarote-x1-sunglasses-lateral/1200x/crop_center.webp?v=1712739173&_gl=1*bdyjxh*_up*MQ..&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pp3609ggIjVkPUaFE9gc9pEqqEcxxr2oMzNtoPhtZO6Mjg4ScmZeAaAv0CEALw_wcB',
    url: 'https://www.siroko.com/es/p/gafas-ciclismo-x1-lanzarote?country=ES&language=es&variant=925508e2-4633-3471-8372-341460972689&cur=EUR&img=feed_front_image&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2pp3609ggIjVkPUaFE9gc9pEqqEcxxr2oMzNtoPhtZO6Mjg4ScmZeAaAv0CEALw_wcB',
    category: 'Gafas de sol',
    precio: '59.95€'
  },
  {
    id: 7,
    name: 'Gafas de sol',
    marca: 'Julbo',
    modelo: 'Shield',
    img: 'https://dawfo2ydqeykk.cloudfront.net/catalog/product/cache/a0878e296847b1aa8832f2fdabad9b1b/s/h/shield_kaki_nero1.jpg',
    url: 'https://www.oliunid.es/julbo-shield-gafas-de-sol-trekking.html?gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oBCWzaywCuSAwM-zz-mQIJHqZnJIwhWVmgLFGt56iu_YdM0di21xMaAuFOEALw_wcB#1383=18409&92=5010',
    category: 'Gafas de sol',
    precio: '151.90€'
  },
  {
    id: 8,
    name: 'Bicicleta',
    marca: 'Orbea',
    modelo: 'Orca Carbon',
    img: 'https://bike-ocasion.com/199042-superlarge_default/orbea-orca-t54.jpg',
    url: 'https://bike-ocasion.com/bicicletas-de-carretera-con-freno-de-disco/23132-orbea-orca-t54-8445881019024.html?utm_medium=ppc&utm_source=google&utm_term=&utm_campaign=ES_ESP_Shopping_All_Convertions&hsa_acc=5975735272&hsa_cam=21440509156&hsa_grp=162884394423&hsa_ad=704638029996&hsa_src=g&hsa_tgt=pla-293946777986&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2ocVDHyx2qh9YHSSbOGQ6v1rIwyCfltOVUSLuurDxpP1UQbx48s6IUaAqw8EALw_wcB',
    category: 'Equipamiento',
    precio: '1849€'
  },
  {
    id: 9,
    name: 'Bicicleta',
    marca: 'Orbea',
    modelo: 'Avant H40',
    img: 'https://cicloscabello.com/89641-thickbox_default/bicicleta-orbea-avant-h40-.jpg',
    url: 'https://cicloscabello.com/es/39120-bicicleta-orbea-avant-h40-.html?gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oN80QpPgNHEdMP2FTKOU_C-PKs2Vfxc6gI2H-H3OToff6VpbfAId0aAtOwEALw_wcB#/1290-colores-verde/1762-talla_de_bicicleta-55',
    category: 'Equipamiento',
    precio: '1039€'
  }
]

export const getProducts = () => productList
