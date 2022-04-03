
import '../App.css';
import { useSepet } from '../contexts/sepet';

function About() {
  const { sepetListe } = useSepet();
  return (
    <>
    <div>About</div>
      
      {
        sepetListe.map((item, index)=> 
        <div key={index}>
          {item.title}
        </div>
        )
      }
    </>
  );
}

export default About;
