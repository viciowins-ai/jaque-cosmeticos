"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const shelfItems = [
  { id: 1, name: "Sérum Revitalizante", price: "R$ 28,90", image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", bgColor: "#fad3cd", height: 180 },
  { id: 2, name: "Base Líquida Cokimiora", price: "R$ 12,90", image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400", bgColor: "#f5d3cf", height: 160 },
  { id: 3, name: "Perfume Frma Plotloa", price: "R$ 28,90", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300", hoverImage: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400", bgColor: "#b3dfd1", height: 190 },
  { id: 4, name: "Óleo Corporal Malal", price: "R$ 12,90", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", bgColor: "#f6e4cc", height: 150 },
  { id: 5, name: "Tônico Caroac Vork", price: "R$ 18,90", image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400", bgColor: "#facdcd", height: 170 },
  { id: 6, name: "Paleta Samo Neran", price: "R$ 18,90", image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400", bgColor: "#f2ece4", height: 140 },
  { id: 7, name: "Creme Hidratante Dia", price: "R$ 34,90", image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", bgColor: "#fad3cd", height: 180 },
  { id: 8, name: "Gloss Labial Brilho", price: "R$ 15,90", image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400", bgColor: "#f5d3cf", height: 160 },
  { id: 9, name: "Perfume Intenso Noite", price: "R$ 45,90", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300", hoverImage: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400", bgColor: "#b3dfd1", height: 190 },
  { id: 10, name: "Loção Corporal Suave", price: "R$ 22,90", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", bgColor: "#f6e4cc", height: 150 },
  { id: 11, name: "Água Micelar Limpeza", price: "R$ 19,90", image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400", bgColor: "#facdcd", height: 170 },
  { id: 12, name: "Sombra Duo Cores", price: "R$ 24,90", image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400", bgColor: "#f2ece4", height: 140 },
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
  const shelfRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollShelf = (direction: 'left' | 'right') => {
    if (shelfRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      shelfRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
        <div className={styles.logoBlock}>
          <h1 className={styles.logoMain}>JAQUE</h1>
          <h2 className={styles.logoSub}>COSMÉTICOS</h2>
        </div>
        <nav className={styles.navMenu}>
          <a href="#" className={styles.navLink}>NATURA</a>
          <a href="#" className={styles.navLink}>AVON</a>
          <a href="#" className={styles.navLink}>O BOTICÁRIO</a>
          <button className={styles.promoBtn}>PROMOÇÕES</button>
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
          <div className={styles.novidadesBadge}>🚚 PRONTA ENTREGA DA JAQUE</div>
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

      {/* Product Shelf */}
      <section className={styles.shelfSection}>
        <button className={`${styles.navArrow} ${styles.navLeft}`} onClick={() => scrollShelf('left')}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>

        <motion.div
          ref={shelfRef}
          className={styles.shelfScroll}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {shelfItems.map((item) => (
            <motion.div
              key={item.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => router.push(`/produto/${item.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.cardPastelBg} style={{ backgroundColor: item.bgColor }}>
                <button className={styles.heartBtn}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </button>
                <img src={item.image} alt={item.name} className={styles.cardImg} />
                <img src={item.hoverImage} alt={`${item.name} em uso`} className={styles.cardHoverImg} />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cardBrand}>Natura</span>
                  <div className={styles.cardRating}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5C518" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>4.9</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.name}</h3>

                <div className={styles.pricingBlock}>
                  <div className={styles.oldPriceRow}>
                    <span className={styles.oldPrice}>R$ 50,00</span>
                  </div>
                  <div className={styles.currentPriceRow}>
                    <span className={styles.cardPrice}>{item.price}</span>
                    <span className={styles.discountBadge}>-33%</span>
                  </div>
                  <span className={styles.installmentText}>ou 4x de R$ 7,22 sem juros</span>
                </div>

                <button className={styles.comprarBtn}>adicionar à sacola</button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button className={`${styles.navArrow} ${styles.navRight}`} onClick={() => scrollShelf('right')}>
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

        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.footerBuyBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.439-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.82 9.82 0 012.893 6.994c-.002 5.445-4.441 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Comprar via WhatsApp
        </a>
      </motion.footer>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.floatingWhatsappBtn}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.439-9.884 9.888-9.884 2.64 0 5.122 1.029 6.988 2.895a9.82 9.82 0 012.893 6.994c-.002 5.445-4.441 9.888-9.885 9.888m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </main >
  );
}
