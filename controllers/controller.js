const mostrarGet=async(req,res)=>{
    res.send('Mostrar Get')
};

const mostrarPost=async(req,res)=>{
    res.send('Mostrar Post')
};

const mostrarPut=async(req,res)=>{
    res.send('Mostrar Put')
};

const mostrarDelete=async(req,res)=>{
    res.send('Mostrar Delete')
};

module.exports = {mostrarGet, mostrarPost, mostrarPut, mostrarDelete};