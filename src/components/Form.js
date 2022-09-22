
function Form({firstName, handleFirstNameChange, lastName, handleLastNameChange, newsletter, handleNewsletterChange}) {
  
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
