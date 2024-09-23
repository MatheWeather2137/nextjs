import ItemList from "./components/ItemList";
import TextBlock from "./components/TextBlock";
import ImageWithText from "./components/ImageWithText";
import SimpleForm from "./components/SimpleForm"
import ConditionalDisplay from "./components/ConditionalDisplay";
import ListWithObjects from "./components/ListWithObjects";
import styles from "./globals.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h1>Mateusz Pogoda</h1>
    
        <ItemList items={["item","index"]}/>

        <TextBlock heading={"Test"} content={"Content"} />

        <ImageWithText imageUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Festival_automobile_international_2020_-_Bugatti_La_Voiture_Noire_-_001.jpg/800px-Festival_automobile_international_2020_-_Bugatti_La_Voiture_Noire_-_001.jpg"} text = {"Bugatti"}  />

        <SimpleForm label="Wpisz coś:" placeholder="Wpisz coś..."/>
        
        <ConditionalDisplay isVisible={true}/>

        <ListWithObjects items={[
          {name: "buty", value:"Nike Air Force 1"},
          {name: "sklep",value:"Biedronka"},
          {name: "samochód",value:"Ford Focus"}
        ]} ></ListWithObjects>

      </main>
  
    </div>
  );
}

