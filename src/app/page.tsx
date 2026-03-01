import styles from "./page.module.css";
import { Search, ShoppingBag, User, Menu, ChevronRight, Heart, Star } from "lucide-react";

// Simulando a prateleira exata da Natura com um item do tipo "Hero" na ponta
const shelfItems = [
  { id: "hero", isHero: true, image: "https://images.unsplash.com/photo-1591871987518-809ba8736f88?q=80&w=600&fit=crop", title: "Conheça as novidades" },
  { id: 1, isHero: false, tag: "lançamento", name: "Kit Tododia Morango e Baunilha Dourada com Hidratante...", brand: "Tododia", rating: "5.0", oldPrice: "R$ 259,60", price: "R$ 181,00", discount: "30", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&fit=crop" },
  { id: 2, isHero: false, tag: "lançamento", name: "Creme Desodorante Nutritivo para o Corpo Tododia...", brand: "Tododia", rating: "5.0", oldPrice: "R$ 78,90", price: "R$ 78,90", discount: "0", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400&fit=crop" },
  { id: 3, isHero: false, tag: "lançamento", name: "Body Splash Tododia Morango e Baunilha Dourada 200 ml", brand: "Tododia", rating: "5.0", oldPrice: "R$ 93,90", price: "R$ 65,90", discount: "30", image: "https://images.unsplash.com/photo-1594034183956-78229b35e27a?q=80&w=400&fit=crop" }
];

const categories = [
  { title: "Kits Presente", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=200&fit=crop" },
  { title: "Perfumaria", image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=200&fit=crop" }, /* Updated to a beautiful generic perfumery shot */
  { title: "Corpo e Banho", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=200&fit=crop" },
  { title: "Maquiagem", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=200&fit=crop" },
  { title: "Cabelos", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=200&fit=crop" },
  { title: "Skincare", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=200&fit=crop" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Top Banner (Promo) */}
      <div className={styles.promoBar}>
        Ganhe frete grátis nas compras acima de R$ 149,00! 🚚
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.menuIcon}><Menu size={28} /></div>
          <div className={styles.logo}>Jaque<span>Cosméticos</span></div>
          <div className={styles.headerIcons}>
            <button><User size={24} /></button>
            <button className={styles.cartBtn}>
              <ShoppingBag size={24} />
              <span className={styles.cartBadge}>2</span>
            </button>
          </div>
        </div>
        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <Search size={20} className={styles.searchIcon} />
            <input type="text" placeholder="O que você está procurando?" className={styles.searchInput} />
          </div>
        </div>
      </header>

      {/* Hero Banner (Carousel Style) */}
      <section className={styles.heroBanner}>
        <div className={styles.bannerSlide}>
          <div className={styles.bannerContent}>
            <h2>Festival da Beleza</h2>
            <p>Até 40% OFF em Perfumaria e Maquiagem</p>
            <button className={styles.bannerBtn}>Aproveitar <ChevronRight size={18} /></button>
          </div>
        </div>
      </section>

      {/* Circle Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesScroll}>
          {categories.map((cat, i) => (
            <div key={i} className={styles.categoryItem}>
              <div className={styles.categoryCircle}>
                <img src={cat.image} alt={cat.title} />
              </div>
              <span className={styles.categoryTitle}>{cat.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Brands Links */}
      <section className={styles.brandsSection}>
        <div className={styles.brandCard}>O Boticário</div>
        <div className={styles.brandCard}>Natura</div>
        <div className={styles.brandCard}>Avon</div>
      </section>

      {/* Product Shelf (Horizontal Scroll) */}
      <section className={styles.shelfSection}>
        <div className={styles.shelfCenterHeader}>
          <h2>conheça as novidades de Tododia</h2>
          <div className={styles.pillToggles}>
            <button className={`${styles.pillBtn} ${styles.pillActive}`}>Tododia Morango</button>
            <button className={styles.pillBtn}>Tododia Antioleosidade</button>
          </div>
        </div>

        <div className={styles.shelfScroll}>
          {shelfItems.map((item) => {
            if (item.isHero) {
              return (
                <div key={item.id} className={styles.heroCard}>
                  <img src={item.image} alt={item.title} />
                </div>
              );
            }

            return (
              <div key={item.id} className={styles.productCard}>
                <button className={styles.favoriteBtn}>
                  <Heart size={20} strokeWidth={1.5} />
                </button>

                {item.tag && <div className={styles.tagBadge}>{item.tag}</div>}

                <div className={styles.productImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.productInfo}>
                  <div className={styles.brandRow}>
                    <span className={styles.productBrand}>{item.brand}</span>
                    <span className={styles.rating}><Star fill="#f5a623" stroke="none" size={14} /> {item.rating}</span>
                  </div>
                  <h4 className={styles.productName}>{item.name}</h4>

                  <div className={styles.pricing}>
                    {item.discount !== "0" && (
                      <div className={styles.priceRow}>
                        <span className={styles.oldPrice}>{item.oldPrice}</span>
                        <span className={styles.redDiscountBadge}>-{item.discount}%</span>
                      </div>
                    )}
                    <span className={styles.price}>{item.price}</span>
                    <span className={styles.installments}>ou 3x de R$ {(parseFloat((item.price || "0").replace('R$ ', '').replace(',', '.')) / 3).toFixed(2).replace('.', ',')} sem juros</span>
                  </div>

                  <button className={styles.buyBtn}>adicionar à sacola</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Promotional Banners Mix */}
      <section className={styles.promoGrid}>
        <div className={styles.promoBox}>
          <h3>Presentes Natura</h3>
          <p>Kits exclusivos para você</p>
        </div>
        <div className={styles.promoBox}>
          <h3>Nova Linha Avon</h3>
          <p>Cores intensas</p>
        </div>
      </section>

    </main>
  );
}
