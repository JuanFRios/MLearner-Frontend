import { useState, useRef } from 'react';

const useFormData = (initial) => {
  const form = useRef(initial);
  const [formData, setFormData] = useState({});
  const getFormData = () => {
    const fd = new FormData(form.current);
    const obj = {};
    fd.forEach((value, key) => {
      if (key.includes('nested')) {
        const [p1, p2, p3] = key.split('||');
        if (Object.keys(obj).includes(p1)) {
          if (Object.keys(obj[p1]).includes(p2)) {
            obj[p1][p2][p3] = value;
          } else {
            obj[p1][p2] = {
              [p3]: value,
            };
          }
        } else {
          obj[p1] = {
            [p2]: {
              [p3]: value,
            },
          };
        }
      } else {
        obj[key] = value;
      }
    });
    return obj;
  };
  const updateFormData = () => {
    setFormData(getFormData());
  };

  const upData = (data) => {
    setFormData(data);
  };

  const resetFormData = () => {
    setFormData({});
  };
  return { form, formData, updateFormData, resetFormData, upData };
};

export default useFormData;
