import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  imageHeader: {
    flex: 0,
    width: '100%',
  },
  imageText: {
    position: 'absolute', 
    top: 20, 
    left: 0, 
    right: 0, 
    justifyContent: 'flex-start',
    marginTop: 130,
    marginLeft: 20
  },
  headerTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
    letterSpacing: 2,
    fontFamily: 'AvenirNextCondensedDemiBold',
  },
  secondTitle: {
    fontSize: 16,
    color: '#a19c98',
    letterSpacing: 2
  },
  averageWorkout: {
    fontSize: 16,
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    color: '#01234a',
    marginTop: 3
  },
  averageWorkoutAmount: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    color: '#01234a',
    marginLeft: 10
  },
  trainingDays: {
    fontSize: 16,
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    color: '#01234a',
    marginTop: 3
  },
  trainingDaysAmount: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    color: '#01234a',
    marginLeft: 10
  },
  workoutDescriptionTitle: {
    fontSize: 25, 
    fontFamily: 'AvenirNextCondensedDemiBold',
    color: '#01234a', 
    letterSpacing: 2,
    marginTop: 25, 
    marginBottom: 20
  },
  previewTitle: {
    fontSize: 25, 
    fontFamily: 'AvenirNextCondensedDemiBold', 
    color: '#01234a', 
    marginBottom: 15, 
    marginTop: 15
  },
  image1: {
    width: 110,
    height: 80,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#57c4f2'
  },
  submitButton: {
  	color: '#fff',
    textAlign: 'center',
    fontFamily: 'AvenirNextCondensedDemiBold',
    letterSpacing: 2,
    backgroundColor: '#57c4f2',
    padding: 10,
    fontWeight: '500',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#fff',
  }
});

export default styles;
