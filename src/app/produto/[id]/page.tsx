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
                        <div className={styles.cardHeaderWrapper}>
                            <div className={styles.cardHeaderLeft}>
                                <div className={styles.ratingBox}>
                                    <span className={styles.ratingScore}>{product.rating}</span>
                                    <span className={styles.stars}>★★★★★</span>
                                    <span className={styles.reviewsCount}>({product.reviews}) avaliações</span>
                                </div>
                                <div className={styles.recommendBox}>
                                    <span className={styles.greenBadge}>100%</span>
                                    <span className={styles.recommendText}>recomendam este produto</span>
                                </div>
                            </div>
                            <div className={styles.cardHeaderRight}>
                                <button className={styles.iconCircleBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                </button>
                                <button className={styles.iconCircleBtn}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </button>
                            </div>
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

                        <div className={styles.shippingWhiteBox}>
                            <h4>simular frete</h4>
                            <button className={styles.freteBtn}>
                                <span style={{ color: '#666', display: 'flex' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </span>
                                <span style={{ color: '#1a73e8', marginLeft: '8px' }}>informar CEP &gt;</span>
                            </button>
                        </div>

                        <div className={styles.freeShippingWhiteBox}>
                            <p>você ganhou frete grátis. aproveite o benefício</p>
                            <div className={styles.progressBarContainer}>
                                <div className={styles.progressBarBg}>
                                    <div className={styles.progressFill}></div>
                                </div>
                                <div className={styles.truckIconWrapper}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2e6b2e" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                                </div>
                            </div>
                            <a href="#" className={styles.continueShopping}>
                                continuar comprando
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>

                        <button className={styles.addToCartBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                            adicionar à sacola
                        </button>

                        <div className={styles.accordionItem}>
                            <span>descrição</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className={styles.accordionItem}>
                            <span>gota olfativa</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div className={styles.accordionItem}>
                            <span>dicas de uso</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
