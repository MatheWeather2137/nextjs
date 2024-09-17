import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import styles from "./globals.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Mateusz Pogoda</h1>
    
        <ItemList items={["item","index"]}/>

        <TextBlock heading={"Test"} content={"Content"} />

        <ImageWithText imageUrl={"https://shorturl.at/wk0mc"} text = {"Mercedes G-class"}  />
        


      </main>
  
    </div>
  );
}

