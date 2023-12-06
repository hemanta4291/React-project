import React, { useEffect, useState } from 'react';
import { fetchAllContacts, fetchUsContacts } from '../service/contactsService';

const Problem2 = () => {

    const [showModalA, setShowModalA] = useState(false);
    const [showModalB, setShowModalB] = useState(false);
    const [showModalC, setShowModalC] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [checked, setChecked] = useState(false);
    const [allContacts, setAllContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);

    useEffect(() => {
        fetchAllContacts().then((data) => setAllContacts(data.results));

        fetchUsContacts().then((data) => setUsContacts(data.results));
    }, [])

    const openModalC = (contact) => {
        setSelectedContact(contact);
        setShowModalC(true);
    };

    const openModalA = () => {
        setShowModalA(true);
        setShowModalB(false);
    };


    const openModalB = () => {
        setShowModalB(true);
        setShowModalA(false);
    };

    const closeModalA = () => {
        setShowModalA(false);
    };

    const closeModalB = () => {
        setShowModalB(false);
    };

    const handleCloseModal = () => {
        setShowModalA(false);
        setShowModalB(false);
    };

    const filterContacts = (contacts) => {
        return checked ? contacts.filter((contact) => contact.id % 2 === 0) : contacts;
    };

    console.log(allContacts)

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={openModalA}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={openModalB}
                    >
                        US Contacts
                    </button>
                </div>
            </div>

            {/* Modal A */}
            {showModalA && (
                <> <div className="modal-backdrop show"></div>
                    <div className="modal fade show d-flex align-items-center" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog mw-100 w-75" role="document" style={{ maxWidth: '800px' }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal A</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal} ></button>
                                </div>
                                <div className="modal-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <ul className="list-group pb-5">
                                        {filterContacts(allContacts).map((contact) => (
                                            <li key={contact.id} className="list-group-item" onClick={() => openModalC(contact)} style={{cursor:'pointer'}}>
                                                <h4>{contact.country.name}</h4>
                                                <p>{contact.phone}</p>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <div> <button className="btn btn-primary me-2" onClick={openModalA} style={{ color: '#46139f' }}>
                                        Modal Button A
                                    </button>
                                        <button className="btn btn-primary me-2" onClick={openModalB} style={{ color: '#ffcf50' }}>
                                            Modal Button B
                                        </button>
                                        <button className="btn btn-secondary" onClick={handleCloseModal} style={{ background: '#46139f' }}>
                                            Close
                                        </button></div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input me-2"
                                                checked={checked}
                                                onChange={() => setChecked(!checked)}
                                            />
                                            Only Even
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Modal B */}
            {showModalB && (
                <>
                    <div className="modal-backdrop show"></div>
                    <div className="modal fade show d-flex align-items-center" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog mw-100 w-75" role="document" style={{ maxWidth: '800px' }}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal B</h5>
                                    <button type="button" className="btn-close" onClick={handleCloseModal} ></button>
                                </div>
                                <div className="modal-body" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                    <ul className="list-group pb-5">
                                        {filterContacts(usContacts).map((contact) => (
                                            <li key={contact.id} className="list-group-item" onClick={() => openModalC(contact)} style={{cursor:'pointer'}}>
                                                <h4>{contact.country.name}</h4>
                                                <p>{contact.phone}</p>
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                                <div className="modal-footer d-flex justify-content-between">
                                    <div>
                                        <button className="btn btn-primary me-2" onClick={openModalA} style={{ color: '#46139f' }}>
                                            Modal Button A
                                        </button>
                                        <button className="btn btn-secondary me-2" onClick={openModalB} style={{ color: '#ffcf50' }}>
                                            Modal Button B
                                        </button>
                                        <button className="btn btn-secondary" onClick={handleCloseModal} style={{ background: '#46139f' }}>
                                            Close
                                        </button>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input
                                                type="checkbox"
                                                className="form-check-input me-2"
                                                checked={checked}
                                                onChange={() => setChecked(!checked)}
                                            />
                                            Only Even
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}


            {showModalC && selectedContact && (
                <div>
                    <div className="modal-backdrop show"></div>
                    <div className="modal fade show d-flex align-items-center" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-md" role="document" style={{width:'600px'}}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal C</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModalC(false)}></button>
                                </div>
                                <div className="modal-body">
                                    {/* Details for selected contact */}
                                    <h4>{selectedContact.country.name}</h4>
                                    <p>{selectedContact.phone}</p>
                                    {/* ... (other details) */}
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-secondary" onClick={() => setShowModalC(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Problem2;