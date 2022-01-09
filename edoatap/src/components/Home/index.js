import './index.css'
import React from "react";
import Info from '../Info';
import { ListGroup } from 'react-bootstrap'
import Pages from '../Pages';

export default function Home() {
  return (
    <div>
      <div className="title">
        <h3>Αξιοσημείωτα</h3>
      </div>
      <Info />
      <div className="title">
        <h3>Ταυτότητα Οργανισμού</h3>
      </div>
      <div className="text">
        <p >Ο Διεπιστημονικός Οργανισμός Αναγνώρισης Τίτλων Ακαδημαϊκών και Πληροφόρησης(Δ.Ο.Α.Τ.Α.Π.)
        είναι ο επίσημος φορέας της Ελληνικής Δημοκρατίας για την ακαδημαϊκή αναγνώριση τίτλων που
        που απονέμονται από εκπαιδευτικά ιδρύματα  ανώτατης εκπαίδευσης της αλλοδαπής και για την
        Έγκυρη πληροφόρησης για τα ανώτατα ιδρύματα και τους τίτλους σπουδών στην Ελλάδα και το
        εξωτερικό.</p>
        Ο ΔΟΑΤΑΠ είναι Νομικό Πρόσωπο Δημοσίου Δικαίου, εποπτευόμενο από τον Υπουργό Παιδείας και
        Θρησκευμάτων, με έδρα την Αθήνα.
      </div>
      <div className="title">
        <h3>Ανακοινώσεις</h3>
      </div>
      <div className="text">
        <ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>26/06/2020</ListGroup.Item>
            <ListGroup.Item>Σας ενημερώνουμε ότι έγινε μια ενημέρωση στο eDoatap και πλέον σας ζητείται να 
              καταχωρείτε στην αίτηση σας μόνο το Πανεπιστήμιο φοίτησης. Στην περίπτωση που σας έχει 
              επιστραφεί η αίτηση ζητώντας να αλλάξετε τις τιμές σε Κολλέγιο - Σχολή - Τμήμα, παρακαλούμε
              παραβλέψετε αυτή την οδηγία του προελέγχου και πατήστε οριστική υποβολή όταν θα έχετε 
              ολοκληρώσει τις άλλες διορθώσεις που σας ζητούνται.</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>21/02/2020</ListGroup.Item>
            <ListGroup.Item>Η είσοδος στην πλατφόρμα ενδέχεται να επηρεαστεί από τις εργασίες συντήρησης 
              της πληροφοριακής υποδομής της Γενικής Γραμματείας Πληροφοριακών Συστημάτων Δημόσιας 
              Διοίκησης από το Σάββατο 22/2/2020 στις 8:00 έως και την Κυριακή 23/2/2020 στις 24:00.</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>7/11/2019</ListGroup.Item>
            <ListGroup.Item>Ενημέρωση των αρχείων των δικαιολογητικών αναγνώρισης βασικού τίτλου σπουδών. 
              Συγκεκριμένα, προστέθηκε το προαιρετικό δικαιολογητικό ΒΕΒΑΙΩΣΗ ΠΡΑΚΤΙΚΗΣ ΑΣΚΗΣΗΣ ΨΥΧΟΛΟΓΙΑΣ
              που αφορά τους αιτούντες από τον Δ.Ο.Α.Τ.Α.Π. αναγνώρισης βασικού πτυχίου με αντιστοιχία προς
              την Ψυχολογία.</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>20/09/2019</ListGroup.Item>
            <ListGroup.Item>Ενημέρωση των αρχείων των δικαιολογητικών και της εγγραφής αλλοδαπών, ως προς 
              την περιγραφή τους.</ListGroup.Item>
          </ListGroup>
          <ListGroup horizontal>
            <ListGroup.Item>07/06/2019</ListGroup.Item>
            <ListGroup.Item>Προσοχή! Εάν τα δικαιολογητικά που ζητάτε από το Πανεπιστήμιο να σταλούν
              στο protocol_A@doatap.gr είναι σε γλώσσα μη λατινικής γραφής (π.χ. βουλγαρικά, ρωσικά
              κλπ), παρακαλούμε να ενημερώνετε το Πανεπιστήμιο κατά το αίτημά σας προς σε αυτό, να 
              αναγράφουν τουλάχιστον στο θέμα του email το όνομά σας σε λατινική γραφή.</ListGroup.Item>
          </ListGroup>
        </ListGroup>
      </div>
      <Pages/>
    </div>
  );
}
