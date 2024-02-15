import React from 'react';
import s from "./feedback.module.css"
import { nanoid } from 'nanoid';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button key={nanoid()} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
