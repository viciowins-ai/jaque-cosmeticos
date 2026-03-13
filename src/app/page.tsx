"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const shelfItems = [
  {
    "id": 100,
    "name": "Kit Body Spray Desodorante Egeo Blue 100Ml (2 Unidades)",
    "brand": "Boticário",
    "price": "R$ 71,85",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/B90370/4e5be03f-7652-4453-a146-d8140dad3501-bot-90370-egeo-blue-promopack.jpg",
    "hoverImage": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/B90370/4e5be03f-7652-4453-a146-d8140dad3501-bot-90370-egeo-blue-promopack.jpg",
    "bgColor": "#e8d5f0",
    "height": 180
  },
  {
    "id": 101,
    "name": "[Eud - Vd] Lançamento Mães 2026 - Combo Baunilha Intensa Com Até 21% De Desconto",
    "brand": "Eudora",
    "price": "R$ 49,90",
    "originalPrice": "R$ 63,88",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95908GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95908GG.jpg",
    "bgColor": "#fad3cd",
    "height": 160
  },
  {
    "id": 102,
    "name": "O.U.I Mon Amie 037 Eau De Parfum Feminino 30Ml",
    "brand": "O.U.i Paris",
    "price": "R$ 199,00",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85361/0d1e2fc2-bc0d-4e68-a9ff-0db588399709-oui-85161-oui-edp-mon-amie-037-30ml-1.jpg",
    "hoverImage": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85361/7fb33c57-e862-4972-b0e5-e9c743ec6791-oui-85165-oui-edp-mon-amie-037-75ml-piramide.jpg",
    "bgColor": "#f6e4cc",
    "height": 190
  },
  {
    "id": 103,
    "name": "Estj Lily V3",
    "brand": "Boticário",
    "price": "R$ 169,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/89302GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/89302GG.jpg",
    "bgColor": "#facdcd",
    "height": 150
  },
  {
    "id": 104,
    "name": "[Eud - Vd] Mães 2026 - Combo Siàge Cica-Therapy Com Até 21% De Desconto",
    "brand": "Eudora",
    "price": "R$ 79,90",
    "originalPrice": "R$ 101,88",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95906GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95906GG.jpg",
    "bgColor": "#f2ece4",
    "height": 170
  },
  {
    "id": 105,
    "name": "Presente Mon Amie 037",
    "brand": "O.U.i Paris",
    "price": "R$ 346,00",
    "originalPrice": "R$ 411,90",
    "discount": "-16%",
    "isPromo": true,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95622GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/95622GG.jpg",
    "bgColor": "#b3dfd1",
    "height": 140
  },
  {
    "id": 106,
    "name": "Refil Loção Desodorante Hidratante Corporal Cuide-Se Bem Boa Noite 350Ml",
    "brand": "Boticário",
    "price": "R$ 41,90",
    "originalPrice": "R$ 59,90",
    "discount": "-30%",
    "isPromo": true,
    "image": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/B88693/d6465e10-09f3-4816-9ee7-758cb3996c7a-bot-88693-cuide-se-bem-boa-noite-refil-01.jpg",
    "hoverImage": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/B88693/e19db0a1-6de6-4111-9f59-83feb3209e4e-bot-88693-cuide-se-bem-boa-noite-refil-03.jpg",
    "bgColor": "#f5d3cf",
    "height": 175
  },
  {
    "id": 107,
    "name": "Instance Cr Hid Maos Baun/Intensa 30G",
    "brand": "Eudora",
    "price": "R$ 19,99",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/86226GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/86226GG.jpg",
    "bgColor": "#d8c8f0",
    "height": 158
  },
  {
    "id": 108,
    "name": "O.U.I Mon Amie 037 Eau De Parfum Feminino 75Ml",
    "brand": "O.U.i Paris",
    "price": "R$ 347,01",
    "originalPrice": "R$ 379,00",
    "discount": "-8%",
    "isPromo": true,
    "image": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85165/3ec25272-25e2-4749-a00c-906927b09adf-oui-85165-oui-edp-mon-amie-037-75ml-1.jpg",
    "hoverImage": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85165/e93cfec7-1045-40f9-b9a8-3207e9e86597-oui-85165-oui-edp-mon-amie-037-75ml-piramide.jpg",
    "bgColor": "#e0d0f5",
    "height": 165
  },
  {
    "id": 109,
    "name": "Botik Vitamina C 10% Sérum De Alta Potência, 30 Ml",
    "brand": "Boticário",
    "price": "R$ 159,90",
    "originalPrice": "R$ 199,90",
    "discount": "-20%",
    "isPromo": true,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/87602GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/87602GG.jpg",
    "bgColor": "#ffd6e8",
    "height": 195
  },
  {
    "id": 110,
    "name": "Instance Creme Hidratante Desodorante Corporal Baunilha Intensa 400Ml",
    "brand": "Eudora",
    "price": "R$ 48,90",
    "originalPrice": "R$ 58,99",
    "discount": "-17%",
    "isPromo": true,
    "image": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/86225GG.jpg",
    "hoverImage": "https://sgi.e-boticario.com.br/Paginas/Imagens/Produtos/86225GG.jpg",
    "bgColor": "#e8d5f0",
    "height": 182
  },
  {
    "id": 111,
    "name": "O.U.I Balm Aveludado Desodorante Corporal Mon Amie 037 200G",
    "brand": "O.U.i Paris",
    "price": "R$ 199,00",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85171/a111ba8c-0714-41da-a8c0-fb34a1e241f8-oui-85171-oui-hidratante-corporal-mon-amie-037-200g-1.jpg",
    "hoverImage": "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/product/Z85171/20fc7a9b-c01f-4284-8c5e-871131732ccb-oui-85171-oui-hidratante-corporal-mon-amie-037-200g-card.jpg",
    "bgColor": "#fad3cd",
    "height": 185
  },
  {
    "id": 1,
    "name": "Combo Baunilha Intensa (Mães)",
    "brand": "Eudora",
    "price": "R$ 49,90",
    "originalPrice": "R$ 63,88",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#e8d5f0",
    "height": 180
  },
  {
    "id": 2,
    "name": "Presente Mon Amie 037",
    "brand": "O.U.i Paris",
    "price": "R$ 346,00",
    "originalPrice": "R$ 411,90",
    "discount": "-16%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fad3cd",
    "height": 160
  },
  {
    "id": 3,
    "name": "Lily L'Eau Desodorante 75ml",
    "brand": "Boticário",
    "price": "R$ 169,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f6e4cc",
    "height": 190
  },
  {
    "id": 4,
    "name": "Batom Niina Secrets Vermelho",
    "brand": "Eudora",
    "price": "R$ 39,99",
    "originalPrice": "R$ 49,99",
    "discount": "-20%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 150
  },
  {
    "id": 5,
    "name": "Presente Glamour Myriad",
    "brand": "Boticário",
    "price": "R$ 145,90",
    "originalPrice": "R$ 180,90",
    "discount": "-19%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f2ece4",
    "height": 170
  },
  {
    "id": 6,
    "name": "Paleta de Sombras Nude",
    "brand": "Boticário",
    "price": "R$ 18,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 7,
    "name": "Creme Hidratante Dia",
    "brand": "Natura",
    "price": "R$ 34,90",
    "originalPrice": "R$ 50,00",
    "discount": "-30%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fad3cd",
    "height": 180
  },
  {
    "id": 8,
    "name": "Gloss Labial Brilho",
    "brand": "Avon",
    "price": "R$ 15,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d3cf",
    "height": 160
  },
  {
    "id": 9,
    "name": "Perfume Intenso Noite",
    "brand": "Boticário",
    "price": "R$ 45,90",
    "originalPrice": "R$ 65,00",
    "discount": "-29%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b3dfd1",
    "height": 190
  },
  {
    "id": 10,
    "name": "Loção Corporal Suave",
    "brand": "Natura",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f6e4cc",
    "height": 150
  },
  {
    "id": 11,
    "name": "Água Micelar Limpeza",
    "brand": "Avon",
    "price": "R$ 19,90",
    "originalPrice": "R$ 28,00",
    "discount": "-28%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 12,
    "name": "Sombra Duo Cores",
    "brand": "Boticário",
    "price": "R$ 24,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 13,
    "name": "Sabonete Líquido Relax",
    "brand": "Natura",
    "price": "R$ 18,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fad3cd",
    "height": 180
  },
  {
    "id": 14,
    "name": "Delineador Líquido Preto",
    "brand": "Avon",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d3cf",
    "height": 160
  },
  {
    "id": 15,
    "name": "Body Splash Frescor",
    "brand": "Boticário",
    "price": "R$ 54,90",
    "originalPrice": "R$ 70,00",
    "discount": "-21%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b3dfd1",
    "height": 190
  },
  {
    "id": 16,
    "name": "Desodorante Spray",
    "brand": "Natura",
    "price": "R$ 24,90",
    "originalPrice": "R$ 30,00",
    "discount": "-17%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f6e4cc",
    "height": 150
  },
  {
    "id": 17,
    "name": "Máscara de Cílios Volume",
    "brand": "Avon",
    "price": "R$ 29,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 18,
    "name": "Creme Nutritivo Mãos",
    "brand": "Boticário",
    "price": "R$ 21,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 19,
    "name": "Shampoo Fortalecedor",
    "brand": "Natura",
    "price": "R$ 19,90",
    "originalPrice": "R$ 25,00",
    "discount": "-20%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fad3cd",
    "height": 180
  },
  {
    "id": 20,
    "name": "Batom Matte Vermelho",
    "brand": "Avon",
    "price": "R$ 16,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d3cf",
    "height": 160
  },
  {
    "id": 21,
    "name": "Loção Pós Barba Fresh",
    "brand": "Boticário",
    "price": "R$ 42,90",
    "originalPrice": "R$ 55,00",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b3dfd1",
    "height": 190
  },
  {
    "id": 22,
    "name": "Batom Cremoso Hidratante",
    "brand": "Natura",
    "price": "R$ 14,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f6e4cc",
    "height": 150
  },
  {
    "id": 23,
    "name": "Pó Compacto Facial",
    "brand": "Avon",
    "price": "R$ 32,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 24,
    "name": "Sabonete Líquido Facial",
    "brand": "Boticário",
    "price": "R$ 28,90",
    "originalPrice": "R$ 35,00",
    "discount": "-17%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 25,
    "name": "Sérum Facial Dual",
    "brand": "Eudora",
    "price": "R$ 39,90",
    "originalPrice": "R$ 55,00",
    "discount": "-27%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#e8d5f0",
    "height": 180
  },
  {
    "id": 26,
    "name": "Perfume Feminino Floral",
    "brand": "Eudora",
    "price": "R$ 89,90",
    "originalPrice": "R$ 120,00",
    "discount": "-25%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#d8c8f0",
    "height": 190
  },
  {
    "id": 27,
    "name": "Hidratante Corpo Delux",
    "brand": "Eudora",
    "price": "R$ 29,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#e0d0f5",
    "height": 160
  },
  {
    "id": 28,
    "name": "Paleta Glitter Festival",
    "brand": "Berenice",
    "price": "R$ 49,90",
    "originalPrice": "R$ 65,00",
    "discount": "-23%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#ffd6e8",
    "height": 175
  },
  {
    "id": 29,
    "name": "Batom Líquido Vibrante",
    "brand": "Berenice",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#ffc8dc",
    "height": 158
  },
  {
    "id": 30,
    "name": "Blush Duo Mágico",
    "brand": "Berenice",
    "price": "R$ 36,90",
    "originalPrice": "R$ 48,00",
    "discount": "-23%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#ffcce0",
    "height": 165
  },
  {
    "id": 31,
    "name": "Eau de Parfum Parisienne",
    "brand": "O.U.i Paris",
    "price": "R$ 129,90",
    "originalPrice": "R$ 170,00",
    "discount": "-24%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#d6ecf8",
    "height": 195
  },
  {
    "id": 32,
    "name": "Creme Anti-Idade Paris",
    "brand": "O.U.i Paris",
    "price": "R$ 79,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#cce0f0",
    "height": 170
  },
  {
    "id": 33,
    "name": "Sérum Vitamina C Luxe",
    "brand": "O.U.i Paris",
    "price": "R$ 94,90",
    "originalPrice": "R$ 130,00",
    "discount": "-27%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b8d8f0",
    "height": 182
  },
  {
    "id": 34,
    "name": "Base Matte Perfeita",
    "brand": "Mary Kay",
    "price": "R$ 59,90",
    "originalPrice": "R$ 79,90",
    "discount": "-25%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fce4ec",
    "height": 165
  },
  {
    "id": 35,
    "name": "Sérum TimeWise Repair",
    "brand": "Mary Kay",
    "price": "R$ 119,90",
    "originalPrice": "R$ 160,00",
    "discount": "-25%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f8c8d8",
    "height": 185
  },
  {
    "id": 36,
    "name": "Batom Extensão de Cor",
    "brand": "Mary Kay",
    "price": "R$ 42,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d0e0",
    "height": 155
  },
  {
    "id": 112,
    "name": "Combo Baunilha Intensa (Mães)",
    "brand": "Eudora",
    "price": "R$ 49,90",
    "originalPrice": "R$ 63,88",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#e8d5f0",
    "height": 180
  },
  {
    "id": 113,
    "name": "Loção Corporal Suave",
    "brand": "Natura",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f6e4cc",
    "height": 150
  },
  {
    "id": 114,
    "name": "Água Micelar Limpeza",
    "brand": "Avon",
    "price": "R$ 19,90",
    "originalPrice": "R$ 28,00",
    "discount": "-28%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 115,
    "name": "Sabonete Líquido Relax",
    "brand": "Natura",
    "price": "R$ 18,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#fad3cd",
    "height": 180
  },
  {
    "id": 116,
    "name": "Delineador Líquido Preto",
    "brand": "Avon",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d3cf",
    "height": 160
  },
  {
    "id": 117,
    "name": "Máscara de Cílios Volume",
    "brand": "Avon",
    "price": "R$ 29,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 118,
    "name": "Creme Nutritivo Mãos",
    "brand": "Boticário",
    "price": "R$ 21,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 119,
    "name": "Loção Pós Barba Fresh",
    "brand": "Boticário",
    "price": "R$ 42,90",
    "originalPrice": "R$ 55,00",
    "discount": "-22%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b3dfd1",
    "height": 190
  },
  {
    "id": 120,
    "name": "Pó Compacto Facial",
    "brand": "Avon",
    "price": "R$ 32,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#facdcd",
    "height": 170
  },
  {
    "id": 121,
    "name": "Sabonete Líquido Facial",
    "brand": "Boticário",
    "price": "R$ 28,90",
    "originalPrice": "R$ 35,00",
    "discount": "-17%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400",
    "bgColor": "#f2ece4",
    "height": 140
  },
  {
    "id": 122,
    "name": "Sérum Facial Dual",
    "brand": "Eudora",
    "price": "R$ 39,90",
    "originalPrice": "R$ 55,00",
    "discount": "-27%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#e8d5f0",
    "height": 180
  },
  {
    "id": 123,
    "name": "Batom Líquido Vibrante",
    "brand": "Berenice",
    "price": "R$ 22,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#ffc8dc",
    "height": 158
  },
  {
    "id": 124,
    "name": "Blush Duo Mágico",
    "brand": "Berenice",
    "price": "R$ 36,90",
    "originalPrice": "R$ 48,00",
    "discount": "-23%",
    "isPromo": true,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#ffcce0",
    "height": 165
  },
  {
    "id": 125,
    "name": "Sérum Vitamina C Luxe",
    "brand": "O.U.i Paris",
    "price": "R$ 94,90",
    "originalPrice": "R$ 130,00",
    "discount": "-27%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#b8d8f0",
    "height": 182
  },
  {
    "id": 126,
    "name": "Sérum TimeWise Repair",
    "brand": "Mary Kay",
    "price": "R$ 119,90",
    "originalPrice": "R$ 160,00",
    "discount": "-25%",
    "isPromo": true,
    "image": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f8c8d8",
    "height": 185
  },
  {
    "id": 127,
    "name": "Batom Extensão de Cor",
    "brand": "Mary Kay",
    "price": "R$ 42,90",
    "originalPrice": "",
    "discount": "",
    "isPromo": false,
    "image": "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300",
    "hoverImage": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400",
    "bgColor": "#f5d0e0",
    "height": 155
  }
];

// URLs for floating background products (using transparent-looking or cutout styles from prior requests/Pexels)
const floatingImages = [
  { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&fit=crop", top: "10%", left: "5%", delay: 0 },
  { src: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=200&fit=crop", top: "60%", left: "8%", delay: 1 },
  { src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&fit=crop", top: "15%", left: "85%", delay: 2 },
  { src: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=200&fit=crop", top: "65%", left: "80%", delay: 1.5 },
  { src: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=200&fit=crop", top: "5%", left: "45%", delay: 0.5 },
];

export default function Home() {
  const lancamentosRef = useRef<HTMLDivElement>(null);
  const prontaEntregaRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredItems = activeFilter
    ? activeFilter === 'promo' ? shelfItems.filter(item => item.isPromo) : shelfItems.filter(item => item.brand === activeFilter)
    : shelfItems.filter(item => item.brand === 'Boticário');


  const lancamentosItems = shelfItems.slice(0, 12);
  
  const getRibbonImage = (brand: string) => {
      switch(brand.toLowerCase()) {
         case 'eudora': return 'https://minhaloja.grupoboticario.com.br/assets/product-flags/EUD.png';
         case 'o.u.i paris': return 'https://minhaloja.grupoboticario.com.br/assets/product-flags/OUI.png';
         case 'quem disse, berenice?': return 'https://minhaloja.grupoboticario.com.br/assets/product-flags/QDB.png';
         default: return 'https://minhaloja.grupoboticario.com.br/assets/product-flags/BOT.png';
      }
  };
  const catalogs = [
    { id: 1, title: 'Revista O Boticário', img: 'https://minhaloja-resources.grupoboticario.com.br/magazine/1632/page_1.webp', link: 'https://minhaloja.boticario.com.br/jaquelin' },
    { id: 2, title: 'Revista Eudora', img: 'https://minhaloja-resources.grupoboticario.com.br/magazine/1634/page_1.webp', link: 'https://minhaloja.eudora.com.br/jaquelin' },
    { id: 3, title: 'Revista O.U.i Paris', img: 'https://minhaloja-resources.grupoboticario.com.br/magazine/1615/page_1.webp', link: 'https://minhaloja.ouiparis.com/jaquelin' },
    { id: 4, title: 'Revista Quem Disse, Berenice?', img: 'https://minhaloja-resources.grupoboticario.com.br/magazine/1616/page_1.webp', link: 'https://minhaloja.quemdisseberenice.com.br/jaquelin' }
  ];

  const scrollShelf = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <main className={styles.main}>

      {/* Background Video Component */}
      <div className={styles.floatingContainer}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.bgVideo}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.bgVideoOverlay}></div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoBlock} onClick={() => setActiveFilter(null)} style={{ cursor: 'pointer' }}>
          <h1 className={styles.logoMain}>JACK</h1>
          <h2 className={styles.logoSub}>COSMÉTICOS</h2>
        </div>
        <nav className={styles.navMenu}>
          <button
            onMouseEnter={() => setActiveFilter('Boticário')}
            onClick={() => window.open('https://minhaloja.grupoboticario.com.br/jaquelin', '_blank')}
            className={`${styles.navLink} ${activeFilter === 'Boticário' ? styles.navLinkActive : ''}`}
          >
            GRUPO BOTICÁRIO
          </button>
          <button
            onMouseEnter={() => setActiveFilter('promo')}
            className={`${styles.promoBtn} ${activeFilter === 'promo' ? styles.promoBtnActive : ''}`}
          >
            PROMOÇÕES
          </button>
        </nav>
      </header>

      {/* Center Banner */}
      <motion.section
        className={styles.heroSection}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.heroGlowBanner}>
          <div className={styles.novidadesBadge}>🚚 PRONTA ENTREGA DA JACK</div>
          <div className={styles.heroText}>
            <span className={styles.heroPrice}>Até 50%</span>
            <span className={styles.heroSubText}>DE DESCONTO</span>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className={styles.featuresSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>🛍️</div>
          <div>
            <h4>Multimarcas</h4>
            <p><strong>Natura</strong>, <strong>Avon</strong> e <strong>O Boticário</strong> a pronta-entrega.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>🔒</div>
          <div>
            <h4>Pagamento Seguro</h4>
            <p>Aceitamos <strong>PIX</strong> para maior segurança na sua transação.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}>📦</div>
          <div>
            <h4>Entrega Rápida</h4>
            <p>Envios para todo o Brasil via <strong>Correios</strong> ou Transportadoras.</p>
          </div>
        </div>
      </motion.section>

            {/* Navegue pelas marcas */}
      <section className={styles.categorySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Navegue pelas marcas</h2>
        </div>
        <div className={styles.brandCircles}>
          {[
            { 
              name: 'O Boticário', color: '#00a368', link: 'https://minhaloja.boticario.com.br/jaquelin',
              icon: <img src="https://minhaloja.grupoboticario.com.br/images/boticario.png" alt="O Boticário" style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
            },
            { 
              name: 'Eudora', color: '#54324c', link: 'https://minhaloja.eudora.com.br/jaquelin',
              icon: <img src="https://minhaloja.grupoboticario.com.br/images/eud.png" alt="Eudora" style={{ width: '42px', height: '42px', objectFit: 'contain' }} /> 
            },
            { 
              name: 'O.U.i Paris', color: '#b01c37', link: 'https://minhaloja.ouiparis.com/jaquelin',
              icon: <img src="https://minhaloja.grupoboticario.com.br/images/oui.png" alt="O.U.i" style={{ width: '56px', height: '56px', objectFit: 'contain' }} /> 
            },
            { 
              name: 'Berenice', color: '#e52b82', link: 'https://minhaloja.quemdisseberenice.com.br/jaquelin',
              icon: <img src="https://minhaloja.grupoboticario.com.br/images/qdb.png" alt="Quem Disse, Berenice" style={{ width: '40px', height: '40px', objectFit: 'contain' }} /> 
            },
            { 
              name: 'Natura', color: '#F48120', link: 'https://www.minhaloja.natura.com/consultoria/jaquelineanne',
              icon: <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 'bold' }}>Natura</span> 
            },
            { 
              name: 'Mary Kay', color: '#e53935', link: 'https://lojaconsultora.marykay.com.br/jaqueline-ortiz-de-oliveira/8XGowcqwYaSD',
              icon: <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>MK</span> 
            }
          ].map((b) => (
             <div 
               key={b.name} 
               className={styles.brandBadge} 
               onMouseEnter={() => setActiveFilter(b.name === 'O Boticário' ? 'Boticário' : b.name)}
               onClick={() => window.open(b.link, '_blank')}
             >
               <div className={styles.brandCircle} style={{ background: b.color, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%' }}>
                  {b.icon}
               </div>
               <span className={styles.brandName} style={{ textAlign: 'center', whiteSpace: 'pre-line' }}>{b.name === 'Berenice' ? 'Quem disse,\nBerenice?' : b.name}</span>
             </div>
          ))}
        </div>
      </section>

      {/* Lançamentos Shelf */}
      <section className={styles.shelfSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Lançamentos</h2>
          <button className={styles.verTudoBtn}>Ver tudo</button>
        </div>
        <button className={`${styles.navArrow} ${styles.navLeft}`} onClick={() => scrollShelf(lancamentosRef, 'left')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <div ref={lancamentosRef} className={styles.shelfScroll}>
          {lancamentosItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => router.push(`/produto/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardPastelBg}>
                <img src={getRibbonImage(item.brand)} alt={`Tag ${item.brand}`} className={styles.productFlag} />
                <button className={styles.heartBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src={item.image} alt={item.name} className={styles.cardImg} />
                <img src={item.hoverImage} alt={`${item.name} em uso`} className={styles.cardHoverImg} />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.cardRatingStars}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="transparent" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.name.length > 55 ? item.name.substring(0, 55) + '...' : item.name}</h3>

                <div className={styles.badgesWrapper}>
                  {item.brand.toLowerCase() === 'o.u.i paris' && <span className={styles.prontaEntregaLineBadge}>Vegano</span>}
                  <span className={styles.prontaEntregaLineBadge}>Lançamento</span>
                  {item.discount && <span className={styles.discountBadge}>{item.discount}</span>}
                </div>

                <div className={styles.pricingBlock}>
                  {item.originalPrice ? (
                    <div className={styles.oldPriceRow}>
                      <span className={styles.oldPriceLabel}>De</span>
                      <span className={styles.oldPrice}>{item.originalPrice}</span>
                      <span className={styles.oldPriceLabel}>por</span>
                    </div>
                  ) : (
                    <div className={styles.oldPriceRow}>
                       <span className={styles.oldPriceLabel}>Por</span>
                    </div>
                  )}
                  <div className={styles.currentPriceRow}>
                    <span className={styles.cardPrice}>{item.price}</span>
                  </div>
                </div>

                <button className={styles.verProdutoBtn}>Ver produto</button>
              </div>
            </motion.div>
          ))}
        </div>

        <button className={`${styles.navArrow} ${styles.navRight}`} onClick={() => scrollShelf(lancamentosRef, 'right')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </section>

      {/* Catálogos Digitais */}
      <section className={styles.categorySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Veja os catálogos digitais</h2>
        </div>
        <div className={styles.catalogGrid}>
           {catalogs.map(catalog => (
             <div key={catalog.id} className={styles.catalogCard} onClick={() => window.open(catalog.link, '_blank')}>
                <img src={catalog.img} alt={catalog.title} className={styles.catalogImg} />
                <div className={styles.catalogOverlay}>
                   <h3 className={styles.catalogTitle}>{catalog.title}</h3>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Produtos à Pronta-Entrega */}
      <section className={styles.shelfSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Produtos a Pronta-Entrega</h2>
          <button className={styles.verTudoBtn} onClick={() => setActiveFilter(null)}>Ver tudo</button>
        </div>
        <button className={`${styles.navArrow} ${styles.navLeft}`} onClick={() => scrollShelf(prontaEntregaRef, 'left')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <div ref={prontaEntregaRef} className={styles.shelfScroll}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => router.push(`/produto/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardPastelBg}>
                <img src={getRibbonImage(item.brand)} alt={`Tag ${item.brand}`} className={styles.productFlag} />
                <button className={styles.heartBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src={item.image} alt={item.name} className={styles.cardImg} />
                <img src={item.hoverImage} alt={`${item.name} em uso`} className={styles.cardHoverImg} />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardHeaderRow}>
                  <div className={styles.cardRatingStars}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#001833" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="transparent" stroke="#001833" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.name.length > 55 ? item.name.substring(0, 55) + '...' : item.name}</h3>

                <div className={styles.badgesWrapper}>
                  {item.brand.toLowerCase() === 'o.u.i paris' && <span className={styles.prontaEntregaLineBadge}>Vegano</span>}
                  <span className={styles.prontaEntregaLineBadge}>Pronta-entrega</span>
                  {item.discount && <span className={styles.discountBadge}>{item.discount}</span>}
                </div>

                <div className={styles.pricingBlock}>
                  {item.originalPrice ? (
                    <div className={styles.oldPriceRow}>
                      <span className={styles.oldPriceLabel}>De</span>
                      <span className={styles.oldPrice}>{item.originalPrice}</span>
                      <span className={styles.oldPriceLabel}>por</span>
                    </div>
                  ) : (
                    <div className={styles.oldPriceRow}>
                       <span className={styles.oldPriceLabel}>Por</span>
                    </div>
                  )}
                  <div className={styles.currentPriceRow}>
                    <span className={styles.cardPrice}>{item.price}</span>
                  </div>
                </div>

                <button className={styles.verProdutoBtn}>Ver produto</button>
              </div>
            </motion.div>
          ))}
        </div>

        <button className={`${styles.navArrow} ${styles.navRight}`} onClick={() => scrollShelf(prontaEntregaRef, 'right')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </section>

{/* Sticky Bottom Footer */}
      <motion.footer
        className={styles.bottomFooter}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      >
        <div className={styles.footerLeft}>
          <img src="/pix-logo.svg" alt="Pix Powered by Banco Central" className={styles.pixOfficialLogo} />
        </div>

        <div className={styles.footerCenter}>
          <p>Entrega para todo o Brasil via Correios ou<br /><span className={styles.muteText}>transportadora privadas</span></p>
        </div>

        <a href="https://wa.me/5541997298384?text=Olá%20Jack!%20Gostaria%20de%20ver%20os%20produtos%20disponíveis." target="_blank" rel="noopener noreferrer" className={styles.footerBuyBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.439-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.82 9.82 0 012.893 6.994c-.002 5.445-4.441 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Comprar via WhatsApp
        </a>
      </motion.footer>



    </main >
  );
}

