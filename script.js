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
                description: 'INGREDIENTES: Carne, Pimenton, Maiz Tierno, queso y salsa de tomate',
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
                name: 'Pizza Carnívora Mixta',
                description: 'INGREDIENTES: Pepperoni, Jamón, Chorizo, Tocino, Queso Mozzarella y Salsa de Tomate',
                sizes: {
                    personal: 25000,
                    mediana: 35000,
                    familiar: 50000
                },
                image: '/carnivoramixta.webp',
                category: 'pizzas'
            }
        ]
    },
    bebidas: [
        {
            id: 'b1',
            name: 'Coca-Cola Personal',
            description: 'Botella de 350ml',
            price: 3500,
            image: '/cocacolapersonal.webp',
            category: 'bebidas'
        },
        {
            id: 'b2',
            name: 'Coca-Cola Familiar',
            description: 'Botella de 2L',
            price: 4.99,
            image: '/cocacolafamiliar.webp',
            category: 'bebidas'
        }
    ],
    combos: [
        {
            id: 'c1',
            name: 'Combo Personal',
            description: 'Pizza Personal De Pollo + 1 Coca-Cola Personal',
            price: 16000 ,
            image: '/combopersonal.webp',
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
                            <option value="personal">Personal - $${product.sizes.personal.toLocaleString('es-CO')}
                                (4 Porciones)</option>
                            <option value="mediana">Mediana - $${product.sizes.mediana.toLocaleString('es-CO')}
                                (12 Porciones)</option>
                            <option value="familiar">Familiar - $${product.sizes.familiar.toLocaleString('es-CO')} (16 Porciones)</option>
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
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 260px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>$${product.price.toLocaleString('es-CO')}</strong></p>
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
                <div>$${itemTotal.toLocaleString('es-CO')}</div>
                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartList.appendChild(itemElement);
    });

    document.getElementById('cartTotal').innerHTML = `Total: $${total.toLocaleString('es-CO')}`;
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
    let message = `🍕 *NUEVO PEDIDO - PIZZAS STITCH* 🍕\n\n`;

    message += `📋 *DETALLE DEL PEDIDO:*\n`;
    cart.forEach(item => {
        message += `• ${item.quantity} x ${item.name} - *$${(item.price * item.quantity).toLocaleString('es-CO')}*\n`;
    });

    message += `\n💰 *TOTAL A PAGAR:* *$${orderTotal.toLocaleString('es-CO')}*\n\n`;
    message += `📍 *DIRECCIÓN DE ENTREGA:*\n\n*${address}*\n\n`;
    message += `💳 *MÉTODO DE PAGO:* \n\n *${paymentMethod.toUpperCase()}*\n`;

    if (paymentMethod === 'efectivo' && paymentAmount) {
        let change = paymentAmount - orderTotal;
        message += `\n💵 *PAGA CON:* *$${paymentAmount.toLocaleString('es-CO')}*\n`;
        message += `💲 *CAMBIO A DEVOLVER:* *$${change.toLocaleString('es-CO')}*\n`;
    }

    message += `\n✅ *CONFIRMACIÓN PENDIENTE* \n`;

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
    const paymentAmount = parseInt(document.getElementById('paymentAmount').value);
    const changeAmount = document.getElementById('changeAmount');
    const orderTotal = Math.round(getOrderTotal());

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
    document.getElementById('orderTotalDisplay').textContent = `(Total: $${orderTotal.toLocaleString('es-CO')})`;
}
function showPizzaAnimation() {
    return new Promise((resolve) => {
        const animationContainer = document.getElementById('pizza-animation-container');
        animationContainer.style.display = 'flex';
        
        // La animación dura aproximadamente 4 segundos
        setTimeout(() => {
            animationContainer.style.display = 'none';
            resolve();
        }, 4000);
    });
}
// Modificar la función completeCashOrder
async function completeCashOrder() {
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
    let whatsappLink = `https://wa.me/573176143433?text=${encodeURIComponent(message)}`;

    // Mostrar animación antes de enviar el pedido
    await showPizzaAnimation();

    // Enviar pedido a WhatsApp y limpiar todo
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

    const imageUrl = await uploadImageToImgBB(paymentProof);
    if (!imageUrl) return;

    let message = formatOrderMessage(address, 'transferencia') + `\n\n📸 *Comprobante de Pago:* ${imageUrl}`;
    let whatsappLink = `https://wa.me/573176143433?text=${encodeURIComponent(message)}`;

    // Mostrar animación antes de enviar el pedido
    await showPizzaAnimation();

    // Enviar pedido a WhatsApp y limpiar todo
    sendOrderToWhatsApp(whatsappLink);
}



// Función actualizada para limpiar el carrito y cerrar el modal
function sendOrderToWhatsApp(whatsappLink) {
    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappLink, '_blank');

    // Limpiar el carrito
    cart = [];
    updateCartDisplay();

    // Limpiar todos los campos del formulario
    document.getElementById('deliveryAddress').value = '';
    document.getElementById('transferDeliveryAddress').value = '';
    document.getElementById('paymentAmount').value = '';
    document.getElementById('paymentProof').value = '';
    
    // Resetear las secciones del modal
    document.querySelectorAll('.payment-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById('cartSection').classList.add('active');
    
    // Ocultar la sección de cambio si está visible
    const changeSection = document.getElementById('changeSection');
    if (changeSection) {
        changeSection.style.display = 'none';
    }

    // Cerrar el modal usando Bootstrap
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        const modalInstance = bootstrap.Modal.getInstance(cartModal);
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
// Tutorial interactivo profesional y responsivo para Pizza Express
function createTutorial() {
    // Crear elementos principales del tutorial
    const tutorialOverlay = document.createElement('div');
    tutorialOverlay.className = 'tutorial-overlay';
    
    const tutorialModal = document.createElement('div');
    tutorialModal.className = 'tutorial-modal';
    
    // Crear el contenedor de la flecha indicadora
    const tutorialArrow = document.createElement('div');
    tutorialArrow.className = 'tutorial-arrow';
    
    // Pasos del tutorial con información mejorada
    const steps = [
      {
        title: '¡Bienvenido a Pizza Express!',
        content: 'Te guiaremos paso a paso para que puedas hacer tu pedido de forma rápida y sencilla. ¡Sigue este breve tutorial para comenzar!',
        icon: '<i class="fas fa-pizza-slice"></i>',
        target: null,
        position: 'center'
      },
      {
        title: 'Selecciona una categoría',
        content: 'Elige entre nuestra variedad de categorías: Pizzas Clásicas, Especiales, Mixtas, Combos o Bebidas según lo que desees ordenar.',
        icon: '<i class="fas fa-th-large"></i>',
        target: '.category-buttons',
        position: 'bottom'
      },
      {
        title: 'Explora nuestros productos',
        content: 'Aquí podrás ver todos los productos disponibles en la categoría seleccionada. Desliza para explorar todas las opciones.',
        icon: '<i class="fas fa-search"></i>',
        target: '#productsContainer',
        position: 'top'
      },
      {
        title: 'Elige el tamaño perfecto',
        content: 'Para pizzas, selecciona el tamaño que más te convenga: Personal, Mediana, Familiar o Fiesta.',
        icon: '<i class="fas fa-ruler"></i>',
        target: '.size-selector',
        position: 'right'
      },
      {
        title: 'Añade al carrito',
        content: 'Una vez que hayas elegido tus productos, haz clic en este botón para añadirlos a tu carrito de compras.',
        icon: '<i class="fas fa-cart-plus"></i>',
        target: '.btn-success',
        position: 'bottom'
      },
      {
        title: 'Revisa tu pedido',
        content: 'Haz clic en el icono del carrito para revisar todos los productos que has seleccionado y el total de tu pedido.',
        icon: '<i class="fas fa-shopping-cart"></i>',
        target: '.cart-button',
        position: 'left'
      },
      {
        title: '¡Todo listo para ordenar!',
        content: 'Ahora estás listo para completar tu pedido. En pocos minutos disfrutarás de nuestras deliciosas pizzas en la comodidad de tu hogar.',
        icon: '<i class="fas fa-check-circle"></i>',
        target: null,
        position: 'center'
      }
    ];
    
    let currentStep = 0;
    
    // Crear contenido del tutorial con mejoras visuales
    function renderStep(step) {
      const stepEl = document.createElement('div');
      stepEl.className = 'tutorial-step';
      
      // Encabezado con icono
      const headerEl = document.createElement('div');
      headerEl.className = 'tutorial-header';
      
      if (step.icon) {
        const iconEl = document.createElement('div');
        iconEl.className = 'tutorial-icon';
        iconEl.innerHTML = step.icon;
        headerEl.appendChild(iconEl);
      }
      
      const titleEl = document.createElement('h3');
      titleEl.textContent = step.title;
      headerEl.appendChild(titleEl);
      
      // Contenido del paso
      const contentEl = document.createElement('p');
      contentEl.textContent = step.content;
      
      // Contador de pasos
      const progressEl = document.createElement('div');
      progressEl.className = 'tutorial-progress';
      progressEl.innerHTML = `<span>${currentStep + 1}</span> de <span>${steps.length}</span>`;
      
      // Barra de progreso
      const progressBarContainer = document.createElement('div');
      progressBarContainer.className = 'progress-bar-container';
      
      const progressBar = document.createElement('div');
      progressBar.className = 'progress-bar';
      progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
      
      progressBarContainer.appendChild(progressBar);
      
      // Botones de navegación
      const buttonsEl = document.createElement('div');
      buttonsEl.className = 'tutorial-buttons';
      
      if (currentStep > 0) {
        const prevButton = document.createElement('button');
        prevButton.innerHTML = '<i class="fas fa-arrow-left"></i> Anterior';
        prevButton.className = 'tutorial-prev-btn';
        prevButton.addEventListener('click', () => {
          currentStep--;
          updateTutorial();
        });
        buttonsEl.appendChild(prevButton);
      }
      
      if (currentStep < steps.length - 1) {
        const nextButton = document.createElement('button');
        nextButton.innerHTML = 'Siguiente <i class="fas fa-arrow-right"></i>';
        nextButton.className = 'tutorial-next-btn';
        nextButton.addEventListener('click', () => {
          currentStep++;
          updateTutorial();
        });
        buttonsEl.appendChild(nextButton);
      } else {
        const finishButton = document.createElement('button');
        finishButton.innerHTML = '¡Comenzar a ordenar! <i class="fas fa-utensils"></i>';
        finishButton.className = 'tutorial-finish-btn';
        finishButton.addEventListener('click', () => {
          closeTutorial();
        });
        buttonsEl.appendChild(finishButton);
      }
      
      // Botón omitir (más discreto pero accesible)
      const skipButton = document.createElement('button');
      skipButton.innerHTML = 'Omitir tutorial <i class="fas fa-times"></i>';
      skipButton.className = 'tutorial-skip-btn';
      skipButton.addEventListener('click', () => {
        closeTutorial();
      });
      
      // Ensamblar todos los elementos
      stepEl.appendChild(headerEl);
      stepEl.appendChild(contentEl);
      stepEl.appendChild(progressEl);
      stepEl.appendChild(progressBarContainer);
      stepEl.appendChild(buttonsEl);
      stepEl.appendChild(skipButton);
      
      return stepEl;
    }
    
    // Posicionar el tutorial según el elemento objetivo con scroll automático
    function positionTutorial() {
      const step = steps[currentStep];
      
      // Ocultar la flecha por defecto
      tutorialArrow.style.display = 'none';
      
      // Si no hay objetivo específico, centrar en la pantalla
      if (!step.target) {
        tutorialModal.style.top = '50%';
        tutorialModal.style.left = '50%';
        tutorialModal.style.transform = 'translate(-50%, -50%)';
        
        // Eliminar cualquier resaltado anterior
        document.querySelectorAll('.tutorial-highlight').forEach(el => {
          el.classList.remove('tutorial-highlight');
          el.classList.remove('tutorial-pulse');
        });
        
        return;
      }
      
      const targetEl = document.querySelector(step.target);
      if (!targetEl) return;
      
      // Hacer scroll al elemento objetivo
      const scrollOptions = {
        behavior: 'smooth',
        block: 'center'
      };
      
      // Asegurar que el elemento esté visible en la pantalla
      targetEl.scrollIntoView(scrollOptions);
      
      // Aplicar resaltado con efecto pulsante al elemento objetivo
      document.querySelectorAll('.tutorial-highlight').forEach(el => {
        el.classList.remove('tutorial-highlight');
        el.classList.remove('tutorial-pulse');
      });
      
      targetEl.classList.add('tutorial-highlight');
      targetEl.classList.add('tutorial-pulse');
      
      // Crear un efecto de oscurecimiento alrededor del elemento resaltado
      const targetRect = targetEl.getBoundingClientRect();
      createSpotlight(targetRect);
      
      // Esperar un momento para que el DOM se actualice y obtener las dimensiones correctas
      setTimeout(() => {
        const targetRect = targetEl.getBoundingClientRect();
        const modalRect = tutorialModal.getBoundingClientRect();
        
        // Posicionar flecha y modal según la posición especificada
        tutorialArrow.style.display = 'block';
        
        switch (step.position) {
          case 'top':
            tutorialModal.style.top = `${targetRect.top - modalRect.height - 20}px`;
            tutorialModal.style.left = `${targetRect.left + (targetRect.width / 2) - (modalRect.width / 2)}px`;
            tutorialModal.style.transform = 'none';
            
            tutorialArrow.className = 'tutorial-arrow arrow-bottom';
            tutorialArrow.style.top = `${targetRect.top - 10}px`;
            tutorialArrow.style.left = `${targetRect.left + (targetRect.width / 2) - 10}px`;
            break;
            
          case 'bottom':
            tutorialModal.style.top = `${targetRect.bottom + 20}px`;
            tutorialModal.style.left = `${targetRect.left + (targetRect.width / 2) - (modalRect.width / 2)}px`;
            tutorialModal.style.transform = 'none';
            
            tutorialArrow.className = 'tutorial-arrow arrow-top';
            tutorialArrow.style.top = `${targetRect.bottom}px`;
            tutorialArrow.style.left = `${targetRect.left + (targetRect.width / 2) - 10}px`;
            break;
            
          case 'left':
            tutorialModal.style.top = `${targetRect.top + (targetRect.height / 2) - (modalRect.height / 2)}px`;
            tutorialModal.style.left = `${targetRect.left - modalRect.width - 20}px`;
            tutorialModal.style.transform = 'none';
            
            tutorialArrow.className = 'tutorial-arrow arrow-right';
            tutorialArrow.style.top = `${targetRect.top + (targetRect.height / 2) - 10}px`;
            tutorialArrow.style.left = `${targetRect.left - 10}px`;
            break;
            
          case 'right':
            tutorialModal.style.top = `${targetRect.top + (targetRect.height / 2) - (modalRect.height / 2)}px`;
            tutorialModal.style.left = `${targetRect.right + 20}px`;
            tutorialModal.style.transform = 'none';
            
            tutorialArrow.className = 'tutorial-arrow arrow-left';
            tutorialArrow.style.top = `${targetRect.top + (targetRect.height / 2) - 10}px`;
            tutorialArrow.style.left = `${targetRect.right}px`;
            break;
            
          default:
            tutorialModal.style.top = '50%';
            tutorialModal.style.left = '50%';
            tutorialModal.style.transform = 'translate(-50%, -50%)';
            tutorialArrow.style.display = 'none';
        }
        
        // Asegurar que el modal esté siempre visible en la pantalla
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const modalTop = parseInt(tutorialModal.style.top);
        const modalLeft = parseInt(tutorialModal.style.left);
        
        // Ajustar si se sale por arriba o abajo
        if (modalTop < 10) {
          tutorialModal.style.top = '10px';
          
          // Reposicionar la flecha
          if (step.position === 'top') {
            tutorialArrow.style.top = `${targetRect.top - 10}px`;
          }
        } else if (modalTop + modalRect.height > viewportHeight - 10) {
          tutorialModal.style.top = `${viewportHeight - modalRect.height - 10}px`;
          
          // Reposicionar la flecha
          if (step.position === 'bottom') {
            tutorialArrow.style.top = `${targetRect.bottom}px`;
          }
        }
        
        // Ajustar si se sale por la izquierda o derecha
        if (modalLeft < 10) {
          tutorialModal.style.left = '10px';
          
          // Reposicionar la flecha
          if (step.position === 'left') {
            tutorialArrow.style.left = `${targetRect.left - 10}px`;
          }
        } else if (modalLeft + modalRect.width > viewportWidth - 10) {
          tutorialModal.style.left = `${viewportWidth - modalRect.width - 10}px`;
          
          // Reposicionar la flecha
          if (step.position === 'right') {
            tutorialArrow.style.left = `${targetRect.right}px`;
          }
        }
      }, 100);
    }
    
    // Crear efecto de foco (spotlight) alrededor del elemento resaltado
   // Función modificada para crear el efecto de spotlight sin difuminado
function createSpotlight(targetRect) {
    // Eliminar spotlight anterior si existe
    const existingSpotlight = document.querySelector('.tutorial-spotlight');
    if (existingSpotlight) {
      existingSpotlight.remove();
    }
    
    // Si no hay elemento target, no crear spotlight
    if (!targetRect) return;
    
    // Crear elemento de spotlight
    const spotlight = document.createElement('div');
    spotlight.className = 'tutorial-spotlight';
    
    // Posicionar y dimensionar el spotlight
    spotlight.style.top = `${targetRect.top - 10}px`;
    spotlight.style.left = `${targetRect.left - 10}px`;
    spotlight.style.width = `${targetRect.width + 20}px`;
    spotlight.style.height = `${targetRect.height + 20}px`;
    
    // Asegurarnos de que el elemento objetivo esté realmente claro
    const targetEl = document.querySelector(steps[currentStep].target);
    if (targetEl) {
      // Eliminar cualquier efecto de filtro que pueda estar afectando
      targetEl.style.filter = 'none';
      targetEl.style.backdropFilter = 'none';
      // Aumentar el contraste si es necesario
      targetEl.style.zIndex = '9999';
    }
    
    document.body.appendChild(spotlight);
  }
    // Actualizar el tutorial al cambiar de paso
    function updateTutorial() {
      // Limpiar modal
      tutorialModal.innerHTML = '';
      
      // Renderizar paso actual
      tutorialModal.appendChild(renderStep(steps[currentStep]));
      
      // Posicionar modal y flecha
      positionTutorial();
      
      // Añadir clase de animación para entrada suave
      tutorialModal.classList.add('tutorial-animate');
      setTimeout(() => {
        tutorialModal.classList.remove('tutorial-animate');
      }, 300);
    }
    
    // Cerrar tutorial con animación de salida
    function closeTutorial() {
      // Añadir animación de salida
      tutorialOverlay.classList.add('tutorial-fade-out');
      
      // Eliminar resaltado y spotlight
      document.querySelectorAll('.tutorial-highlight').forEach(el => {
        el.classList.remove('tutorial-highlight');
        el.classList.remove('tutorial-pulse');
      });
      
      const spotlight = document.querySelector('.tutorial-spotlight');
      if (spotlight) {
        spotlight.remove();
      }
      
      // Eliminar elementos después de la animación
      setTimeout(() => {
        tutorialOverlay.remove();
        tutorialArrow.remove();
        
        // Guardar en localStorage que el usuario ya vio el tutorial
        localStorage.setItem('tutorialSeen', Date.now().toString());
      }, 300);
    }
    
    // Detectar redimensiones de ventana y actualizar posición
    window.addEventListener('resize', () => {
      positionTutorial();
    });
    
    // Agregar todo al DOM
    document.body.appendChild(tutorialOverlay);
    document.body.appendChild(tutorialArrow);
    tutorialOverlay.appendChild(tutorialModal);
    
    // Iniciar tutorial con una pequeña animación de entrada
    tutorialOverlay.style.opacity = '0';
    setTimeout(() => {
      tutorialOverlay.style.opacity = '1';
      updateTutorial();
    }, 200);
  }
  
  // Esperar a que la página termine de cargar completamente
  window.addEventListener('load', function() {
    // Verificar si el usuario ya ha visto el tutorial antes
    const tutorialSeen = localStorage.getItem('tutorialSeen');
    const lastSeenTime = parseInt(tutorialSeen || '0');
    const currentTime = Date.now();
    const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
    
    // Solo mostrar el tutorial si no se ha visto antes o si han pasado más de 7 días
    if (!tutorialSeen || (currentTime - lastSeenTime > sevenDaysInMs)) {
      // Esperamos a que termine la animación de carga
      setTimeout(() => {
        createTutorial();
      }, 2100); // Un poco más que el tiempo del loader
    }
  });