import React, { useState } from 'react';
import { useStyles } from '../styles/searchBar'


export const NotFoundCity = () => {
  const styles = useStyles()
  return (
    <div className={styles.unknownCity}>
      The city is not found yet
    </div>
  )
}