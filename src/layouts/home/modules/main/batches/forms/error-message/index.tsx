/* eslint-disable perfectionist/sort-objects */
export const errorMessage = {
  string: {
    min: (object: string, min: number) => `Please enter ${object} minimum ${min} characters`,
    max: (object: string, max: number) => `${object} maximum ${max} characters`,
    required: (object: string) => `Please enter ${object}`,
  },
  number: {
    min: (object: string, min: number) => `${object} minimum ${min}`,
    max: (object: string, max: number) => `${object} maximum ${max}`,
  },
};
/* eslint-enable perfectionist/sort-objects */
