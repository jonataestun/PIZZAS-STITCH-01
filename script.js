// Loader
window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2000);
});

const products = {
    pizzas: {
        especiales: [
            {
                id: 'pe1',
                name: 'Pizza Mexicana',
                description: 'INGREDIENTES: Carne, Pimenton, Mais Tierno, M, queso y salsa de tomate',
                sizes: {
                    personal: 20000,
                    mediana: 32000,
                    familiar: 46000
                },
                image: '/mexicana.webp',
                category: 'pizzas'
            },
            {
                id: 'pe2',
                name: 'Pizza Hawaiana Especial',
                description: 'INGREDIENTES: Jamón, Piña, Pollo Bechamel, Queso y Salsa de Tomate',
                sizes: {
                    personal: 21000,
                    mediana: 30000,
                    familiar: 40000
                },
                image: '/hawaianaespecial.webp',
                category: 'pizzas'
            },
            {
                id: 'pe3',
                name: 'Pizza Champipollo A la Bechamel',
                description: 'INGREDIENTES: Champiñones, Pollo, Bechamel, Queso y Salsa de Tomate',
                sizes: {
                    personal: 20000,
                    mediana: 28000,
                    familiar: 38000
                },
                image: 'champipolloalabechamel.webp',
                category: 'pizzas'
            }
        ],
        clasicas: [
            {
                id: 'p1',
                name: 'Pizza Hawaiana',
                description: 'INGREDIENTES: Jamón, Piña, Queso y Salsa de Tomate',
                sizes: {
                    personal: 12000,
                    mediana: 22000,
                    familiar: 32000
                },
                image: 'hawaiana.webp',
                category: 'pizzas'
            },
            {
                id: 'p2',
                name: 'Pizza Pollo',
                description: 'INGREDIENTES: Pollo a la Bechamel, Queso y Salsa de Tomate',
                sizes: {
                    personal: 14000,
                    mediana: 25000,
                    familiar: 35000
                },
                image: 'pollo.webp',
                category: 'pizzas'
            },
            {
                id: 'p4',
                name: 'Pizza Maiz',
                description: 'INGREDIENTES: Maiz, Queso y Salsa de Tomate',
                sizes: {
                    personal: 12000,
                    mediana: 25000,
                    familiar: 35000
                },
                image: 'maiz.webp',
                category: 'pizzas'
            },
            {
                id: 'p5',
                name: 'Pizza Salami',
                description: 'INGREDIENTES: Salami, Queso y Salsa de Tomate',
                sizes: {
                    personal: 12000,
                    mediana: 25000,
                    familiar: 35000
                },
                image: 'salami.webp',
                category: 'pizzas'
            },
            {
                id: 'p6',
                name: 'Pizza Jamon',
                description: 'INGREDIENTES: Jamon, Queso y Salsa de Tomate',
                sizes: {
                    personal: 12000,
                    mediana: 25000,
                    familiar: 35000
                },
                image: 'jamon.webp',
                category: 'pizzas'
            }

        ],
        mixtas: [

            {
                id: 'pm1',
                name: 'Pizza Mixta Especial',
                description: 'Combinación de ingredientes clásicos y especiales',
                sizes: {
                    personal: 16.99,
                    mediana: 21.99,
                    familiar: 26.99
                },
                image: 'https://ejemplo.com/pizza-mixta.jpg',
                category: 'pizzas'
            }
        ]
    },
    bebidas: [
        {
            id: 'b1',
            name: 'Coca-Cola Personal',
            description: 'Botella de 350ml',
            price: 2.50,
            image: 'https://i.imgur.com/example1.jpg',
            category: 'bebidas'
        },
        {
            id: 'b2',
            name: 'Coca-Cola Familiar',
            description: 'Botella de 2L',
            price: 4.99,
            image: 'https://i.imgur.com/example2.jpg',
            category: 'bebidas'
        }
    ],
    combos: [
        {
            id: 'c1',
            name: 'Combo Familiar',
            description: 'Pizza grande + 2 bebidas familiares',
            price: 29.99,
            image: 'https://i.imgur.com/example4.jpg',
            category: 'combos'
        }
    ]
};


let currentCategory = 'pizzas';
let cart = []; // Inicializamos el carrito como un array vacío

function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col';

    if (product.category === 'pizzas') {
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="size-selector mb-3">
                        <select class="form-select" id="size-${product.id}">
                            <option value="personal">Personal - $${product.sizes.personal.toFixed(0)}
                                (4 Porciones)</option>
                            <option value="mediana">Mediana - $${product.sizes.mediana.toFixed(0)}
                                (12 Porciones)</option>
                            <option value="familiar">Familiar - $${product.sizes.familiar.toFixed(0)} (16 Porciones)</option>
                        </select>
                    </div>
                    <button class="btn btn-success mt-auto" onclick="addToCart('${product.id}', '${product.category}')">
                        Agregar al Carrito <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
    } else {
        col.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price.toFixed(0)}</strong></p>
                    <button class="btn btn-success mt-auto" onclick="addToCart('${product.id}', '${product.category}')">
                        Agregar al Carrito <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
    }
    return col;
}

function addToCart(productId, category) {
    let product;
    if (category === 'pizzas') {
        ['especiales', 'clasicas', 'mixtas'].some(subcategory => {
            product = products[category][subcategory].find(p => p.id === productId);
            return product;
        });
    } else {
        product = products[category].find(p => p.id === productId);
    }

    if (category === 'pizzas') {
        const sizeSelect = document.getElementById(`size-${productId}`);
        const selectedSize = sizeSelect.value;
        const price = product.sizes[selectedSize];
        const cartItemId = `${productId}-${selectedSize}`;

        const cartItem = cart.find(item => item.id === cartItemId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({
                id: cartItemId,
                name: `${product.name} (${selectedSize})`,
                price: price,
                quantity: 1,
                category: category,
                size: selectedSize
            });
        }
    } else {
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: 1,
                category: category
            });
        }
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCountDesktop').textContent = totalItems;
    document.getElementById('cartCountMobile').textContent = totalItems;
    renderCartItems();
}

function renderCartItems() {
    const cartList = document.getElementById('cartItemsList');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const proceedButton = document.getElementById('proceedToPayment');

    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        cartList.innerHTML = '';
        proceedButton.style.display = 'none';
        document.getElementById('cartTotal').innerHTML = '';
        return;
    }

    emptyMessage.style.display = 'none';
    proceedButton.style.display = 'block';
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item d-flex justify-content-between align-items-center mb-3';
        itemElement.innerHTML = `
            <div>
                <h6 class="mb-0">${item.name}</h6>
                <div class="quantity-controls">
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
            </div>
            <div class="text-end">
                <div>$${itemTotal.toFixed(0)}</div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartList.appendChild(itemElement);
    });

    document.getElementById('cartTotal').innerHTML = `Total: $${total.toFixed(0)}`;
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function formatOrderMessage(address, paymentMethod, paymentAmount = null) {
    let orderTotal = getOrderTotal();
    let message = `🍕 *NUEVO PEDIDO PIZZAS STITCH* 🍕\n\n`;

    message += `📋 *Detalle del Pedido:*\n`;
    cart.forEach(item => {
        message += `• ${item.quantity}x ${item.name} - $${(item.price * item.quantity).toLocaleString('es-CO')}\n`;
    });

    message += `\n💰 *Total a Pagar:* $${orderTotal.toLocaleString('es-CO')}`;
    message += `\n📍 *Dirección de Entrega:*\n${address}`;
    message += `\n💳 *Método de Pago:* ${paymentMethod}`;

    if (paymentMethod === 'efectivo' && paymentAmount) {
        let change = paymentAmount - orderTotal;
        message += `\n💵 *Paga con:* $${paymentAmount.toLocaleString('es-CO')}`;
        message += `\n💲 *Cambio a devolver:* $${change.toLocaleString('es-CO')}`;
    }

    return message;
}




function getOrderTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            currentCategory = e.target.dataset.category;
            const subcategory = e.target.dataset.subcategory;

            document.querySelectorAll('.category-btn').forEach(btn =>
                btn.classList.remove('active')
            );
            e.target.classList.add('active');

            if (currentCategory === 'pizzas') {
                renderProducts(currentCategory, subcategory);
            } else {
                renderProducts(currentCategory);
            }
        });
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        const allPizzas = [
            ...products.pizzas.especiales,
            ...products.pizzas.clasicas,
            ...products.pizzas.mixtas
        ];

        const allProducts = [...allPizzas, ...products.bebidas, ...products.combos];

        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );

        renderFilteredProducts(filteredProducts);
    });

    renderProducts('pizzas', 'especiales');
    updateCartDisplay();
});
function renderProducts(category, subcategory = 'especiales') {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    if (category === 'pizzas') {
        products[category][subcategory].forEach(product => {
            container.appendChild(createProductCard(product));
        });
    } else {
        products[category].forEach(product => {
            container.appendChild(createProductCard(product));
        });
    }
}
function renderFilteredProducts(filteredProducts) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        container.appendChild(createProductCard(product));
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.payment-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    currentSection = sectionId;
}

function selectPayment(method) {
    if (method === 'cash') {
        showSection('cashSection');
    } else if (method === 'transfer') {
        showSection('transferSection');
    }
}

function setExactAmount(isExact) {
    const changeSection = document.getElementById('changeSection');
    changeSection.style.display = isExact ? 'none' : 'block';
}

function calculateChange() {
    const paymentAmount = parseInt(document.getElementById('paymentAmount').value); // Convertir a entero
    const changeAmount = document.getElementById('changeAmount');
    const orderTotal = Math.round(getOrderTotal()); // Asegurar que es un número entero

    // Mostrar el total del pedido con formato colombiano
    document.getElementById('orderTotalDisplay').textContent = `(Total: $${orderTotal.toLocaleString('es-CO')})`;

    if (isNaN(paymentAmount) || paymentAmount < orderTotal) {
        changeAmount.innerHTML = 'El monto es insuficiente';
        changeAmount.style.display = 'block';
        return false;
    }

    const change = paymentAmount - orderTotal;
    changeAmount.innerHTML = `Cambio a devolver: $${change.toLocaleString('es-CO')}`;
    changeAmount.style.display = 'block';
    return true;
}

// Asegurar que el total del pedido se muestre cuando se active la sección
function showChangeSection() {
    document.getElementById('changeSection').style.display = 'block';
    const orderTotal = getOrderTotal();
    document.getElementById('orderTotalDisplay').textContent = `(Total: $${orderTotal.toFixed(0)})`;
}

function completeCashOrder() {
    const address = document.getElementById('deliveryAddress').value.trim();
    const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);

    if (!address) {
        alert('Por favor ingrese una dirección de entrega');
        return;
    }

    let orderTotal = getOrderTotal();

    if (document.getElementById('changeSection').style.display !== 'none') {
        if (isNaN(paymentAmount) || paymentAmount < orderTotal) {
            alert('El monto ingresado es insuficiente');
            return;
        }
    }

    let message = formatOrderMessage(address, 'efectivo', paymentAmount);
    let whatsappLink = `https://wa.me/573176143433?text=${message}`;

    sendOrderToWhatsApp(whatsappLink);
}

function copyAccountNumber() {
    const accountInput = document.getElementById("accountNumber");
    accountInput.select();
    document.execCommand("copy");
    alert("Número de cuenta copiado");
}



async function compressImage(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");

                // Reducir el tamaño de la imagen (ajusta width y height si es necesario)
                const maxWidth = 800;
                const maxHeight = 800;
                let width = img.width;
                let height = img.height;

                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        height *= maxWidth / width;
                        width = maxWidth;
                    } else {
                        width *= maxHeight / height;
                        height = maxHeight;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);

                // Convertir a formato WebP con calidad optimizada
                canvas.toBlob(
                    (blob) => resolve(blob),
                    "image/webp",
                    0.8 // Calidad de compresión
                );
            };
        };
    });
}





const apiKeyImgBB = "11c22cf226b53365494a753a4079bb6d";

async function uploadImageToImgBB(imageFile) {
    const compressedFile = await compressImage(imageFile); // Comprimir antes de subir
    const formData = new FormData();
    formData.append("image", compressedFile);

    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKeyImgBB}`, {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            return result.data.url; // URL pública de la imagen
        } else {
            throw new Error("Error al subir la imagen");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Hubo un problema al subir la imagen. Inténtalo de nuevo.");
        return null;
    }
}


async function completeTransferOrder() {
    const address = document.getElementById('transferDeliveryAddress').value.trim();
    const paymentProof = document.getElementById('paymentProof').files[0];

    if (!address) {
        alert('Por favor ingrese una dirección de entrega');
        return;
    }

    if (!paymentProof) {
        alert('Por favor suba el comprobante de pago');
        return;
    }

    // Subir la imagen y obtener la URL pública
    const imageUrl = await uploadImageToImgBB(paymentProof);
    if (!imageUrl) return; // Detener si hubo error en la subida

    let message = formatOrderMessage(address, 'transferencia') + `\n\n📸 *Comprobante de Pago:* ${imageUrl}`;

    // Codificar correctamente solo el mensaje antes de enviarlo
    let whatsappLink = `https://wa.me/573176143433?text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
}



function sendOrderToWhatsApp(whatsappLink) {
    window.open(whatsappLink, '_blank');

    // Limpiar carrito y actualizar UI
    cart = [];
    updateCartDisplay();

    // Cerrar el modal correctamente
    const modalElement = document.getElementById('cartModal');
    if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
}

function goBackInPaymentFlow() {
    if (currentSection === 'cartSection') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
        if (modal) {
            modal.hide();
        }
    } else if (currentSection === 'cashSection' || currentSection === 'transferSection') {
        showSection('paymentMethodSection');
    } else if (currentSection === 'paymentMethodSection') {
        showSection('cartSection');
    }
}

// Event listeners 
document.getElementById('proceedToPayment').addEventListener('click', () => {
    showSection('paymentMethodSection');
});

const paymentAmount = document.getElementById('paymentAmount');
if (paymentAmount) {
    paymentAmount.addEventListener('input', calculateChange);
}


// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    renderProducts('pizzas');
    updateCartDisplay();
});

// Inicialización de todos los modales de Bootstrap
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function (modal) {
        new bootstrap.Modal(modal);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const categoryContainer = document.querySelector(".category-buttons .container-fluid");
    const shadowLeft = document.querySelector(".scroll-shadow-left");
    const shadowRight = document.querySelector(".scroll-shadow-right");

    // Desplazamiento inicial para sugerir que hay más opciones
    setTimeout(() => {
        categoryContainer.scrollLeft += 50;
    }, 500);

    // Función para mostrar/ocultar sombras dinámicamente
    function updateShadows() {
        shadowLeft.style.opacity = categoryContainer.scrollLeft > 10 ? "1" : "0";
        shadowRight.style.opacity = categoryContainer.scrollLeft + categoryContainer.clientWidth < categoryContainer.scrollWidth - 10 ? "1" : "0";
    }

    // Evento de desplazamiento para actualizar sombras
    categoryContainer.addEventListener("scroll", updateShadows);

    // Ejecutar al inicio para verificar sombras iniciales
    updateShadows();
});

