namespace Desputados.API.Repositorio
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public partial class DesputadosContext : DbContext
    {
        public DesputadosContext()
            : base("name=DesputadosContext")
        {

        }

        public virtual DbSet<alternativas> alternativas { get; set; }
        public virtual DbSet<categorias> categorias { get; set; }
        public virtual DbSet<questoes> questoes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<alternativas>()
                .Property(e => e.DESCRICAO)
                .IsUnicode(false);

            modelBuilder.Entity<categorias>()
                .Property(e => e.DESCRICAO)
                .IsUnicode(false);

            modelBuilder.Entity<categorias>()
                .HasMany(e => e.questoes)
                .WithRequired(e => e.categorias)
                .HasForeignKey(e => e.ID_CATEGORIA)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<questoes>()
                .Property(e => e.ENUNCIADO)
                .IsUnicode(false);

            modelBuilder.Entity<questoes>()
                .Property(e => e.RESOLUCAO)
                .IsUnicode(false);

            modelBuilder.Entity<questoes>()
                .HasMany(e => e.alternativas)
                .WithRequired(e => e.questoes)
                .HasForeignKey(e => e.ID_QUESTAO)
                .WillCascadeOnDelete(false);
        }
    }
}
