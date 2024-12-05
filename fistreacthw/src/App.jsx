import React from 'react';
import Footer from './My components/Footer';
import About from './My components/About me';
import Header from './My components/Header';
import Hobbies from './My components/Hobbies';
import Contact from './My components/Contacts';

const App = () => {
  const hobbies = ['Чтение', 'Программирование', 'Путешествия', 'Музыка'];

  return (
    <div className="app">
      <Header title="Моя страница" />
      <About 
        name="Aiza Diusheeva" 
        description="Я учусь на веб-разработчика в онлайн школе Starta institute."
      />
      <Hobbies hobbies={hobbies} />
      <Contact email="diusheevaaiza@gmail.com" phone="+48503687012">
        <p>Свяжитесь со мной по любому из указанных контактов.</p>
      </Contact>
      <Footer>
        <p>© 2024 Аиза Дюшеева. Все права защищены.</p>
      </Footer>
    </div>
  );
};

export default App;

