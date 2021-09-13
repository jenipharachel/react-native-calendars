import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import {Theme} from '../types';

export default function getStyle(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      // paddingLeft: 5,
      // paddingRight: 5,
      backgroundColor: appStyle.calendarBackground
    },
    dayContainer: {
      flex: 1,
      alignItems: 'center'
    },
    emptyDayContainer: {
      flex: 1
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 7,
      // marginBottom: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 7,
      // marginBottom: 7,
      width: 45,
      textAlign: 'center',
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textDayHeaderColor,
    },
    ...(theme.stylesheet?.calendar?.main || {})
  });
}
