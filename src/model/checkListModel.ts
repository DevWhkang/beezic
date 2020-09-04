import firestore from '@react-native-firebase/firestore';

interface params{
  callback: (checkItems: []) => void;
}

const getCheckListDoc = async (callback: params) => {
  const checkListDoc = await firestore()
    .collection('user-check-list')
    .doc('AZP6tBePcPVj49OKJuIK')
    .get()
    .then((item) => item.data());

  callback(checkListDoc.userDescription);
};

const setCheckListDoc = async (checkItems: array) => {
  firestore()
    .collection('user-check-list')
    .doc('AZP6tBePcPVj49OKJuIK')
    .update({
      userDescription: checkItems,
    });
};

export { setCheckListDoc, getCheckListDoc };
