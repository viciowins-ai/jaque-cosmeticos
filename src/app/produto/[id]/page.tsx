"use client";
import styles from "./produto.module.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProdutoPage() {
    const params = useParams();
    const id = params.id;

    // Mock product data based on ID, fallback to Luna Nuit specifics
    const product = {
        name: "Luna Nuit 75 ml",
        subtitle: "Desodorante Colônia Luna Nuit 75 ml",
        code: "NATBRA-204451",
        rating: 4.9,
        reviews: 34,
        oldPrice: "R$ 185,90",
        price: "R$ 124,90",
        savings: "R$ 61,00",
        installments: "ou 4x de R$ 31,23 sem juros",
        tags: ["Luna", "deo colônia", "feminino", "chypre", "Nuit", "para sair, ocasiões especiais"],
        campaignBg: "https://images.unsplash.com/photo-1548610531-1e9bf7ad9951?auto=format&fit=crop&q=80&w=1920", // Deep purple/cosmic mood
        productImg: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800", // Elegant perfume bottle
        thumbnails: [
            "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=200",
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=200"
        ]
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

            {/* Top Banner */}
            <div className={styles.topPromoBanner}>
                10% OFF site e app* com cupom <a href="#">PRIMEIRACOMPRA</a>
                <button className={styles.closePromo}>✕</button>
            </div>

            {/* Main Header Row */}
            <header className={styles.header}>
                <div className={styles.headerNavTop}>
                    <div className={styles.headerNavLeft}>
                        <span>natura ⏷</span>
                        <span>consultora jack ⏷</span>
                        <span>perfis ⏷</span>
                        <span>atendimento ⏷</span>
                        <span>baixe o app</span>
                        <span>blog</span>
                    </div>
                    <div className={styles.headerNavRight}>
                        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> encontre a natura</span>
                        <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> insira seu cep</span>
                    </div>
                </div>
                <div className={styles.headerMain}>
                    <div className={styles.aquiTemLogoWrapper}>
                        <img
                            src="/aqui-tem-logo.png"
                            alt="Aqui Tem Natura Logo"
                            className={styles.aquiTemImage}
                        />
                    </div>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="o que está buscando hoje?" />
                        <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <div className={styles.searchMic}>✨</div>
                    </div>
                    <div className={styles.headerIcons}>
                        <div className={styles.iconItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            <span>favoritos</span>
                        </div>
                        <div className={styles.iconItem}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>entrar</span>
                        </div>
                        <div className={styles.iconItemCart}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            <span className={styles.cartBadge}>3</span>
                        </div>
                    </div>
                </div>
                <nav className={styles.mainNav}>
                    <a href="#">promoções</a>
                    <a href="#">presentes</a>
                    <a href="#">perfumaria</a>
                    <a href="#">corpo e banho</a>
                    <a href="#">cabelos</a>
                    <a href="#">maquiagem</a>
                    <a href="#">rosto</a>
                    <a href="#">casa</a>
                    <a href="#">infantil</a>
                    <a href="#">homens</a>
                    <a href="#">marcas</a>
                </nav>
            </header>

            <div className={styles.contentWrapper}>
                <motion.div
                    className={styles.leftColumn}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.thumbnails}>
                        {product.thumbnails.map((thumb, idx) => (
                            <img key={idx} src={thumb} className={idx === 1 ? styles.thumbActive : styles.thumbImg} alt="miniatura" />
                        ))}
                    </div>
                    <div className={styles.mainImageWrapper}>
                        <img src={product.productImg} alt="Produto" className={styles.mainProductImg} />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.rightColumn}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.productCard}>
                        <div className={styles.cardTopRow}>
                            <div className={styles.ratingBox}>
                                <span className={styles.ratingScore}>{product.rating}</span>
                                <span className={styles.stars}>★★★★★</span>
                                <span className={styles.reviewsCount}>({product.reviews}) avaliações</span>
                            </div>
                            <div className={styles.actionsBox}>
                                <button className={styles.iconBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </button>
                                <button className={styles.iconBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </button>
                            </div>
                        </div>

                        <div className={styles.recommendBox}>
                            <span className={styles.greenBadge}>100%</span>
                            <span className={styles.recommendText}>recomendam este produto</span>
                        </div>

                        <h1 className={styles.productName}>{product.name}</h1>
                        <p className={styles.productSubtitle}>{product.subtitle}</p>
                        <span className={styles.productCode}>cod. {product.code}</span>

                        <div className={styles.tagsContainer}>
                            {product.tags.map((tag, i) => (
                                <span key={i} className={styles.tagBadge}>{tag}</span>
                            ))}
                        </div>

                        <div className={styles.pricingSection}>
                            <div className={styles.priceRow}>
                                <span className={styles.oldPrice}>de: {product.oldPrice}</span>
                                <span className={styles.currentPrice}>{product.price}</span>
                                <span className={styles.savingsBadge}>economize {product.savings}</span>
                            </div>
                            <p className={styles.installments}>{product.installments}</p>
                        </div>

                        <div className={styles.shippingBox}>
                            <h4>simular frete</h4>
                            <button className={styles.freteBtn}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                informar CEP &gt;
                            </button>
                        </div>

                        <div className={styles.freeShippingBox}>
                            <p>você ganhou frete grátis. aproveite o benefício</p>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill}></div>
                            </div>
                            <a href="#" className={styles.continueShopping}>continuar comprando &rarr;</a>
                        </div>

                        <a
                            href={`https://wa.me/5541997298384?text=Olá%20Consultora%20Jack!%20Gostaria%20de%20comprar%20o%20produto%20${product.name}%20(${product.code})%20pagando%20no%20PIX!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.addToCartBtn}
                            style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.439-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.82 9.82 0 012.893 6.994c-.002 5.445-4.441 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Comprar no Zap com PIX
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
