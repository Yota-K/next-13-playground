'use client';

import { useRef } from 'react';
import { addTodo } from '~/actions/todoActions';

export function CreateForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const add = async (data: FormData) => {
    await addTodo(data);
    if (formRef.current) formRef.current.reset();
  };

  return (
    <form action={add} ref={formRef}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <button type="submit">Add Todo</button>
    </form>
  );
}
