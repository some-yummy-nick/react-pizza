import React, {PureComponent} from 'react';
import classNames from 'classnames';

const availableSizes = [26, 30, 40];

const availableTypes = ['тонкое', 'традиционное'];

export class Item extends PureComponent {
    state = {
        activeType: this.props.item.types[0],
        activeSize: this.props.item.sizes[0]
    };

    onSelectType = index => {
        this.setState({activeType: this.props.item.types[index]})
    };

    onSelectSize = index => {
        this.setState({activeSize: this.props.item.sizes[index]})
    };

    render() {
        const {activeType, activeSize} = this.state;
        const {item} = this.props;

        return <div className="list__item">
            <div className="list__image">
                <img src={item.imageUrl} alt="pizza"/>
            </div>
            <div className="list__desc">
                <div className="list__name">{item.name}</div>
                <div className="list__block">
                    <ul className="list__filters list__filters_top reset-list">
                        {availableTypes.map((type, index) => (
                            <li key={`type-${type}`} className="list__filter list__filter_half">
                                <button type="button"
                                        onClick={() => this.onSelectType(index)}
                                        className={classNames("list__button reset-btn", {
                                            active: activeType === index,
                                        })} disabled={!item.types.includes(index)}>{type}</button>
                            </li>
                        ))}
                    </ul>
                    <ul className="list__filters reset-list">
                        {availableSizes.map((size, index) => (
                            <li key={`size-${size}`} className="list__filter">
                                <button type="button"
                                        onClick={() => this.onSelectSize(index)}
                                        className={classNames("list__button reset-btn", {
                                            active: activeSize === size
                                        })} disabled={!item.sizes.includes(size)}> {size} см.
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="list__bottom">
                    <div className="list__price">от {item.price} ₽</div>
                    <button type="button" className="btn btn_border list__add reset-btn">
                        <span className="list__add-text">Добавить</span>
                        <span className="list__add-number">2</span>
                    </button>
                </div>
            </div>
        </div>;
    }
}

export default Item;
