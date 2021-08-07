import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { View } from 'react-native';
import { theme } from '../../global/styles/theme';

type Props = {
    title: string;
    action?:  ReactNode;
}


export function Header ({ title, action} : Props ) {
    const {secondary100, secondary40} = theme.colors;
    return (
        <LinearGradient
            colors = {[  ]}>

        </LinearGradient>
    );
}