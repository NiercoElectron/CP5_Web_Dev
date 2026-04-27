import React from 'react'

const Card = ({ image, name, description, price, oldPrice, category }) => {
  const discount = oldPrice
    ? Math.round((1 - price / oldPrice) * 100)
    : null

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-(--border) bg-(--bg) shadow-(--shadow) hover:-translate-y-1 transition-transform duration-200">
      {/* Image */}
      <div className="relative bg-(--code-bg) flex items-center justify-center h-52 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain p-4"
          />
        )}
        {category && (
          <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wide bg-(--accent-bg) text-(--accent) border border-(--accent-border) px-2 py-0.5 rounded-full">
            {category}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-(--accent) text-white px-2 py-0.5 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <h3 className="text-(--text-h) font-semibold text-base leading-snug">
          {name}
        </h3>
        {description && (
          <p className="text-(--text) text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        )}

        {/* Price */}
        <div className="mt-auto pt-3 flex items-end justify-between">
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-xs line-through text-(--text) opacity-60">
                R$ {oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-bold text-(--accent)">
              R$ {price.toFixed(2)}
            </span>
          </div>
          <button className="bg-(--accent) hover:opacity-90 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150 cursor-pointer">
            Comprar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card