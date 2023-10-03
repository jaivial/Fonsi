import React from "react";
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';


export default function FuncionInversa() {
    const [text, setText] = useState('');

    const calcularInversa = () => {
        const numero = parseFloat(inputValue);
        const inversa = 1 / numero;
        setResultado(inversa);
}}