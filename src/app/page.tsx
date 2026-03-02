"use client";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const shelfItems = [
  { id: 1, name: "Sérum Revitalizante", price: "R$ 28,90", image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", bgColor: "#fad3cd", height: 180 },
  { id: 2, name: "Base Líquida Cokimiora", price: "R$ 12,90", image: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400", bgColor: "#f5d3cf", height: 160 },
  { id: 3, name: "Perfume Frma Plotloa", price: "R$ 28,90", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=300", hoverImage: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=400", bgColor: "#b3dfd1", height: 190 },
  { id: 4, name: "Óleo Corporal Malal", price: "R$ 12,90", image: "https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400", bgColor: "#f6e4cc", height: 150 },
  { id: 5, name: "Tônico Caroac Vork", price: "R$ 18,90", image: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=400", bgColor: "#facdcd", height: 170 },
  { id: 6, name: "Paleta Samo Neran", price: "R$ 18,90", image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=300", hoverImage: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=400", bgColor: "#f2ece4", height: 140 },
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
          <div className={styles.novidadesBadge}>NOVIDADES</div>
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
        <motion.div
          className={styles.shelfScroll}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {shelfItems.map((item) => (
            <motion.div key={item.id} className={styles.card} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
              <div className={styles.cardPastelBg} style={{ backgroundColor: item.bgColor }}>
                <img src={item.image} alt={item.name} className={styles.cardImg} />
                <img src={item.hoverImage} alt={`${item.name} em uso`} className={styles.cardHoverImg} />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardInfoLeft}>
                  <h3 className={styles.cardTitle}>{item.name}</h3>
                  <div className={styles.cardPrice}>{item.price}</div>
                </div>
                <button className={styles.comprarBtn}>Comprar</button>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

        <button className={styles.footerBuyBtn}>
          Comprar &rarr;
        </button>
      </motion.footer>

    </main>
  );
}
