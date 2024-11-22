import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./components/Counter";
import ColorChanger from "./components/ColorChanger";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";
import FilterList from "./components/FilterList";
import RegistrationForm from "./components/RegistrationForm";
import Posts from "./components/Posts";
import ImageGallery from "./components/ImageGallery";
import CountdownTimer from "./components/CountdownTimer";
import Tabs from "./components/Tabs";
import Quiz from "./components/Quiz";
import BackButton from "./components/BackButton";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <BackButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/color-changer" element={<ColorChanger />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/filter-list" element={<FilterList />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/countdown-timer" element={<CountdownTimer />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
