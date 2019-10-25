


import React, { useEffect } from 'react';

import { Tabs, Tab } from '@material-ui/core';

import CreateCategory from './CreateCategory/CreateCategory';

import CategoryTable from './CategoryTable/CategoryTable';

import { connect } from 'react-redux';

import { fetchCategory, makeNewCat, deleteCat  } from '../../store/action/';

import { useValue } from './../../hooks/';


function Category(props) {

    const [value, setValue] = useValue();

    useEffect(() => {

        props.loadCats();

    }, [value])

    const handleMakeNewCat = (data) => {
        props.makeNewCat(data);
        setValue(0)
    }
    const handleDeleteCat = (id) => {  
       
        props.deleteCategory(id) ; 
    }
    function getContent() {

        if (value === 0) {

            return <CategoryTable deleteCategory={handleDeleteCat} cats={props.cats} />

        }

        else if (value === 1) {

            return <CreateCategory createNewCategory={handleMakeNewCat} cats={props.cats} />

        }

    }


    return (

        <div className="menu">

            <h1 className="heading__scondary">

                دسته ها

        </h1>

            <Tabs

                value={value}

                onChange={(e, value) => setValue(value)}

                indicatorColor="primary"

                textColor="primary"

                centered

            >

                <Tab label="دسته ها" className="menu__tab-label" />

                <Tab label="ایجاد دسته ی جدید " className="menu__tab-label" />

            </Tabs>

            <div className="menu__cmpArea">

                {getContent()}

            </div>

        </div>

    )

}

const mapDispatchToProps = dispatch => {
    return {

        loadCats: () => dispatch(fetchCategory())
        ,
        makeNewCat: (data) => dispatch(makeNewCat(data)) , 

        deleteCategory : (id) => dispatch(deleteCat(id))
    }
}

const mapStateToProps = state => {

    return {

        cats: state.cats.categories

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);  